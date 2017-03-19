import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}   from './app.component';
import {ServiceComponent} from "./service/service.component";
import {CmpAComponent} from "./service/cmp-a.component";
import {CmpBComponent} from "./service/cmp-b.component";
import {LogService, DataService} from "./service";

@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    CmpAComponent,
    CmpBComponent
  ],
  imports: [BrowserModule],
  providers: [DataService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
