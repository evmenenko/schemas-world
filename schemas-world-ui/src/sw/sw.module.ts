import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SwRoutingModule } from './sw-routing.module';
import { SwComponent } from './sw.component';

@NgModule({
  declarations: [SwComponent],
  imports: [BrowserModule, SwRoutingModule],
  providers: [],
  bootstrap: [SwComponent],
})
export class SwModule {}
