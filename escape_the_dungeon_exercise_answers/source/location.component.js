var {Component, EventEmitter} = require('@angular/core');

module.exports = Component({
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
      this.pickUpItem = new EventEmitter();
      this.handlePickUpItem = function(item) {
        console.log('item', item)
        this.pickUpItem.emit(item)
      }
    }
  });
