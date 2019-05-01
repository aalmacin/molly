import { NgModule } from '@angular/core';
import { GlobalComponent } from './global.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [GlobalComponent],
  imports: [
    CommonModule
  ],
  exports: [GlobalComponent]
})
export class GlobalModule { }
