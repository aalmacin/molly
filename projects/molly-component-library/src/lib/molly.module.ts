import { NgModule } from '@angular/core';
import { FlashCardComponent } from './flash-card/flash-card.component';
import { CardComponent } from './card/card.component';
import { MolFlashCardModule } from './flash-card/flash-card.module';
import { MolCardModule } from './card/card.module';

@NgModule({
  declarations: [],
  imports: [MolCardModule, MolFlashCardModule],
  exports: [FlashCardComponent, CardComponent]
})
export class MollyModule { }
