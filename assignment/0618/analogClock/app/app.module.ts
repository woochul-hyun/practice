import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnalogClockMainComponent } from './analog-clock-main/analog-clock-main.component';

@NgModule({
  declarations: [
    AppComponent,
    AnalogClockMainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
