var {Component} = require('@angular/core');

module.exports = Component({
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
