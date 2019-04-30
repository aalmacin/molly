import { NgModule } from '@angular/core';
import { FlashCardComponent } from './flash-card.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FlashCardComponent],
  imports: [
    CommonModule
  ],
  exports: [FlashCardComponent]
})
export class FlashCardModule { }
