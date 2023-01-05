import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import '@web-components/index';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => {
    console.error('HEY');
    console.error(err);
  });
