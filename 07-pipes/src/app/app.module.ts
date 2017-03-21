import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {PipeComponent} from './pipe.component';
import {DoublePipe} from './double.pipe';
import {FilterPipe} from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipeComponent,
    DoublePipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
