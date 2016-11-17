
var heroModel = {
  name: "LLars Bunderchump",
  x: 0,
  y: 0,
  moveNorth: function() {
    this.x++;
  },
  moveSouth: function() {
    this.x--;
  },
  moveEast: function() {
    this.y--
  },
  moveWest: function() {
    this.y++
  }
}

var LocationModel = {
  name: "Nondescript Corridor",
  description: "It is very dark. To the north you can just make out a faint glimmer of golden light.",
  exits: {
    north:true
  },
  removeItem: function(item) {
    this.items.splice(this.items.indexOf(item), 1)
  },
  items: [
    {
      name: "Rusty Sword",
      type: "weapon",
      damage: 1,
      description: "A Rusty old Sword, knocked and well used"
    },
    {
      name: "Cheese",
      type: "food",
      health: 0.5,
      description: "A Piece of Mouldy Cheese"
    }
  ]
}

var inventoryModel = {
  addItem: function(item) {
    this.items.push(item)
  },
  items: []
}

var ProtagonistComponent = ng.core
  .Component({
    selector: "protagonist",
    inputs: ['hero'],
    template:
    `

      <h1>{{hero.name}}</h1>
      <pre>{{hero | json}}</pre>
    `
  })
  .Class({
    constructor: function() {
    }
  });

var ProtagonistEditorComponent = ng.core
  .Component({
    selector: "protagonistEditor",
    inputs: ['hero'],
    outputs: ['done'],
    template:
    `
      <form (submit)="handleSubmit()">
        <label for="name">Name:</label>
        <input name="name" type="text" [(ngModel)]="hero.name" />
        <button class="button">Done</button>
      </form>
    `
  })
  .Class({
    constructor: function() {
      this.done = new ng.core.EventEmitter();
      this.handleSubmit = function() {
        this.done.emit(this.hero);
      }
    }
  });

var LocationComponent = ng.core
  .Component({
    selector: "location",
    inputs: ['location'],
    outputs: ['pickUpItem'],
    template:
    `

      <h2>You are in: {{location.name}}</h2>
      <p>{{location.description}}</p>
      <h3>Items at this location</h3>
      <ul>
        <li *ngFor="let item of location.items">
          {{item.name}}
          <a (click)="handlePickUpItem(item)">Pick up</a>
        </li>
      </ul>
    `
  })
  .Class({
    constructor: function() {
      this.pickUpItem = new ng.core.EventEmitter();
      this.handlePickUpItem = function(item) {
        console.log('item', item)
        this.pickUpItem.emit(item)
      }
    }
  });

var InventoryComponent = ng.core
  .Component({
    selector: "inventory",
    inputs: ['inventory'],
    template:
    `
      <h2>Inventory</h2>
      <li *ngFor="let item of inventory.items">
        {{item.name}}
      </li>
    `
  })
  .Class({
    constructor: function() {
    }
  });

var AppComponent = ng.core
  .Component({
    selector: "app",
    template:
    `
    <div>
      <a class="button" (click)="editMode = !editMode">
        <span *ngIf="!editMode">Edit</span>
        <span *ngIf="editMode">Done</span>
      </a>
    </div>
    <div *ngIf="!editMode">
      <div class="row">
        <div >
          <protagonist [hero]="hero"></protagonist>
        </div>
      </div>
      <div class="row">
        <div >
          <inventory [inventory]="inventory"></inventory>
        </div>
      </div>
      <div class="row">
        <location [location]="location" (pickUpItem)="handlePickUpItem($event)"></location>
      </div>
      <div class="row">
        <button class="button" *ngIf="location.exits.north" (click)="hero.moveNorth()">North</button>
        <button class="button" *ngIf="location.exits.south" (click)="hero.moveSouth()">South</button>
        <button class="button" *ngIf="location.exits.east" (click)="hero.moveEast()">East</button>
        <button class="button" *ngIf="location.exits.west" (click)="hero.moveWest()">West</button>
      </div>
    </div>


    <div class="row" *ngIf="editMode">
      <protagonistEditor [hero]="hero" (done)="editMode=false"></protagonistEditor>
    </div>


    `
  })
  .Class({
    constructor: function() {
      this.editMode = false;
      this.hero = heroModel;
      this.location = LocationModel;
      this.inventory = inventoryModel;
      this.handlePickUpItem = function(item) {
        console.log('item picked up', item);
        this.inventory.addItem(item);
        this.location.removeItem(item);
      }
    }
  })

/**
  * The App Module
  */
var AppModule =
  ng.core.NgModule({
    imports: [ ng.platformBrowser.BrowserModule, ng.forms.FormsModule ],
    declarations: [
      AppComponent,
      ProtagonistComponent,
      ProtagonistEditorComponent,
      InventoryComponent,
      LocationComponent ],
    bootstrap: [ AppComponent ]
  })
  .Class({
    constructor: function() {}
  });


/**
  * Finally bootstrap
  */
ng.platformBrowserDynamic
  .platformBrowserDynamic()
  .bootstrapModule(AppModule);
