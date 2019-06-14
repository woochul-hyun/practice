import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CounterVer2Component } from './counter-ver2/counter-ver2.component';
import { IncreaseComponent } from './increase/increase.component';
import { DecreaseComponent } from './decrease/decrease.component';

@NgModule({
  declarations: [AppComponent, CounterVer2Component, IncreaseComponent, DecreaseComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
