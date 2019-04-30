import { NgModule } from '@angular/core';
import { FlashCardComponent } from './flash-card/flash-card.component';
import { CardComponent } from './card/card.component';
import { FlashCardModule } from './flash-card/flash-card.module';
import { CardModule } from './card/card.module';

@NgModule({
  declarations: [],
  imports: [FlashCardModule, CardModule],
  exports: [FlashCardComponent, CardComponent]
})
export class MollyComponentLibraryModule { }
