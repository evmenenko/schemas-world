import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { SwModule } from './sw/sw.module';

platformBrowserDynamic()
  .bootstrapModule(SwModule)
  .catch((err) => console.error(err));
