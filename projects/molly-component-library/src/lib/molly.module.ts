import { NgModule } from '@angular/core';
import {
  ButtonDirective,
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
    ButtonDirective,
    FlashCardComponent,
    CardComponent,
    NavComponent,
    NavItemComponent,
    NavHeaderComponent
  ],
  imports: [MolButtonModule, MolCardModule, MolFlashCardModule, MolNavModule]
})
export class MollyModule {}
