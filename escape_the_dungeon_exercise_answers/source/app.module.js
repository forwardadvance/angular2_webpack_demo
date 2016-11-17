var {NgModule} = require('@angular/core');
var {FormsModule} = require('@angular/forms');
var {BrowserModule} = require('@angular/platform-browser');
var AppComponent = require('./app.component');
var HeroComponent = require('./hero.component');
var HeroEditorComponent = require('./hero.editor.component');
var InventoryComponent = require('./inventory.component');
var LocationComponent = require('./location.component');

module.exports = NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [
      AppComponent,
      HeroComponent,
      HeroEditorComponent,
      InventoryComponent,
      LocationComponent ],
  bootstrap: [ AppComponent ]
})
.Class({
  constructor: function() {}
});
