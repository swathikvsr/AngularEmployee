import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MainModule } from '../Modules/MainModule';
import {enableProdMode} from '@angular/core';
const platform = platformBrowserDynamic();
enableProdMode();
platform.bootstrapModule(MainModule);
