import { NgModule } from '@angular/core';
import {
  ButtonDirective,
  CardComponent,
  FlashCardComponent,
  ImageJumbotronComponent,
  InfoCardComponent,
  MolButtonModule,
  MolCardModule,
  MolFlashCardModule,
  MolInfoCardModule,
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
    ImageJumbotronComponent,
    InfoCardComponent
  ],
  imports: [
    MolButtonModule,
    MolCardModule,
    MolFlashCardModule,
    MolNavModule,
    MolJumbotronModule,
    MolInfoCardModule
  ]
})
export class MollyModule {}
