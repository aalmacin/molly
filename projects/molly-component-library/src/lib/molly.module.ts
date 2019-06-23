import { NgModule } from '@angular/core';
import {
  ButtonDirective,
  CardComponent,
  FlashCardComponent,
  ImageJumbotronComponent,
  MolButtonModule,
  MolCardModule,
  MolFlashCardModule,
  MolJumbotronModule,
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
    NavHeaderComponent,
    ImageJumbotronComponent
  ],
  imports: [
    MolButtonModule,
    MolCardModule,
    MolFlashCardModule,
    MolNavModule,
    MolJumbotronModule
  ]
})
export class MollyModule {}
