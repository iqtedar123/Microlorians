export * from './lib/angular-elements-lib.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AngularElementsLibModule } from './lib/angular-elements-lib.module';

platformBrowserDynamic()
  .bootstrapModule(AngularElementsLibModule)
  .catch((err) => console.error(err));
