import { NgModule } from '@angular/core';
import { ButtonComponent, FlashCardComponent, CardComponent, NavComponent, NavItemComponent, NavHeaderComponent, MolButtonModule, MolCardModule, MolFlashCardModule, MolNavModule } from '../public-api';

@NgModule({
  declarations: [],
  exports: [
    ButtonComponent,
    FlashCardComponent,
    CardComponent,
    NavComponent,
    NavItemComponent,
    NavHeaderComponent
  ],
  imports: [MolButtonModule, MolCardModule, MolFlashCardModule, MolNavModule],
})
export class MollyModule {}
