import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MolFlashCardModule } from 'projects/molly-component-library/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MolFlashCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
