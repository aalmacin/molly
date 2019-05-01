# Molly Component Library

## How to use the Component Library

Install the npm package

```sh
npm i 'molly-component-library'
```

## Add the module as a dependency

Example `app.module.ts`
```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MollyModule } from 'molly-component-library';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MollyModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Use the components

Example: `app.component.html`
```html
<mol-flash-card topic="Philosophy" front="What is the meaning of life?" back="42"></mol-flash-card>
```
