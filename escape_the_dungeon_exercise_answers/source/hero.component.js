var {Component} = require('@angular/core');

module.exports = Component({
  selector: "hero",
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
