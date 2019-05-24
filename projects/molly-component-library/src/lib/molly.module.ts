import { NgModule } from "@angular/core";
import { FlashCardComponent } from "./flash-card/flash-card.component";
import { CardComponent } from "./card/card.component";
import { MolFlashCardModule } from "./flash-card/flash-card.module";
import { MolCardModule } from "./card/card.module";
import { MolButtonModule } from "./button/button.module";
import { ButtonComponent } from "./button/button.component";

@NgModule({
  declarations: [],
  imports: [MolButtonModule, MolCardModule, MolFlashCardModule],
  exports: [ButtonComponent, FlashCardComponent, CardComponent]
})
export class MollyModule {}
