import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StopWatchMainComponent } from './stop-watch-main/stop-watch-main.component';

@NgModule({
  declarations: [
    AppComponent,
    StopWatchMainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
