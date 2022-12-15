import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

@NgModule({
  imports: [BrowserModule, CommonModule],
  declarations: [DemoComponent],
  entryComponents: [DemoComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AngularElementsLibModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(DemoComponent, {
      injector: this.injector,
    });

    customElements.define(`demo-component`, el);
  }
}
