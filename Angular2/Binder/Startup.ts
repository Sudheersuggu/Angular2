import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {MainModule} from '../Binder/MainModule'
const platform = platformBrowserDynamic();
platform.bootstrapModule(MainModule);