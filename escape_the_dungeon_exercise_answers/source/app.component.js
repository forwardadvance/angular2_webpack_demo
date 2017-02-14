var {Component} = require('@angular/core');
var heroModel = require('./hero.model');
var inventoryModel = require('./inventory.model');
var locationModel = require('./location.model');



module.exports = Component({
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
          <hero [hero]="hero"></hero>
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
      <heroEditor [hero]="hero" (done)="editMode=false"></heroEditor>
    </div>


    `
  })
  .Class({
    constructor: function() {
      this.editMode = false;
      this.hero = heroModel;
      this.location = locationModel;
      this.inventory = inventoryModel;
      this.handlePickUpItem = function(item) {
        console.log('item picked up', item);
        this.inventory.addItem(item);
        this.location.removeItem(item);
      }
    }
  })
