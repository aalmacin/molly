import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MollyModule } from 'molly-component-library';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MollyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
