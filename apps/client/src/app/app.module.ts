import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarouselComponentModule } from './carousel/carousel.component';

@NgModule({
  declarations: [AppComponent,],
  imports: [BrowserModule, CarouselComponentModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
