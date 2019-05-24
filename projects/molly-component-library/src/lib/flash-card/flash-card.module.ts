import { NgModule } from "@angular/core";
import { FlashCardComponent } from "./flash-card.component";
import { CommonModule } from "@angular/common";
import { MolCardModule } from "../card/card.module";
import { MolButtonModule } from '../button/button.module';

@NgModule({
  declarations: [FlashCardComponent],
  imports: [MolButtonModule, MolCardModule, CommonModule],
  exports: [FlashCardComponent]
})
export class MolFlashCardModule {}
