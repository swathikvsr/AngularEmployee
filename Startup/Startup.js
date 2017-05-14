"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var MainModule_1 = require("../Modules/MainModule");
var core_1 = require("@angular/core");
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
core_1.enableProdMode();
platform.bootstrapModule(MainModule_1.MainModule);
//# sourceMappingURL=Startup.js.map