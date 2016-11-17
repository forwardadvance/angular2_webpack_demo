require('reflect-metadata');
require('rxjs');
require('zone.js');

var { platformBrowserDynamic } = require('@angular/platform-browser-dynamic');

var AppModule = require('./app.module');
platformBrowserDynamic().bootstrapModule(AppModule);
