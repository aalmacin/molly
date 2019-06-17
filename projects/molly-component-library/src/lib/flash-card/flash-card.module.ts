import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MolButtonModule } from '../button/button.module';
import { MolCardModule } from '../card/card.module';
import { FlashCardComponent } from './flash-card.component';

@NgModule({
  declarations: [FlashCardComponent],
  imports: [MolButtonModule, MolCardModule, CommonModule],
  exports: [FlashCardComponent]
})
export class MolFlashCardModule {}
