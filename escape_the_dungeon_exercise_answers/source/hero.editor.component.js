var {Component, EventEmitter} = require('@angular/core');

module.exports = Component({
    selector: "heroEditor",
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
      this.done = new EventEmitter();
      this.handleSubmit = function() {
        this.done.emit(this.hero);
      }
    }
  });
