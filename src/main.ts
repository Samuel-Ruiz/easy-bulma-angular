import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import {BulmaModule} from './app/bulma.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(BulmaModule)
  .catch(err => console.error(err));
