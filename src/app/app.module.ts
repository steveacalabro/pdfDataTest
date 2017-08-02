import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PrettyJsonModule } from 'angular2-prettyjson';

import { ReadJsonService } from './read-json.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PrettyJsonModule
  ],
  providers: [
    ReadJsonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
