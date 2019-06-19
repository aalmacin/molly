import { NgModule } from '@angular/core';
import {
  ButtonComponent,
  CardComponent,
  FlashCardComponent,
  MolButtonModule,
  MolCardModule,
  MolFlashCardModule,
  MolNavModule,
  NavComponent,
  NavHeaderComponent,
  NavItemComponent
} from '../public-api';

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
  imports: [MolButtonModule, MolCardModule, MolFlashCardModule, MolNavModule]
})
export class MollyModule {}
