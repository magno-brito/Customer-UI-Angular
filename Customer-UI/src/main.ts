import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { CostumerModule } from './app/app.MainModule';


platformBrowserDynamic().bootstrapModule(CostumerModule)
  .catch(err => console.error(err));
