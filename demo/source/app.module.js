var {NgModule} = require('@angular/core');
var {BrowserModule} = require('@angular/platform-browser');
var AppComponent = require('./app.component');

exports.AppModule = NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
.Class({
  constructor: function() {}
});
