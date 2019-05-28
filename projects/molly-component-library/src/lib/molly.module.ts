import { NgModule } from "@angular/core";
import { FlashCardComponent } from "./flash-card/flash-card.component";
import { CardComponent } from "./card/card.component";
import { MolFlashCardModule } from "./flash-card/flash-card.module";
import { MolCardModule } from "./card/card.module";
import { MolButtonModule } from "./button/button.module";
import { ButtonComponent } from "./button/button.component";
import { NavComponent } from './nav/nav.component';
import { MolNavModule } from './nav/nav.module';
import { NavItemComponent } from './nav/nav-item.component';

@NgModule({
  declarations: [],
  imports: [MolButtonModule, MolCardModule, MolFlashCardModule, MolNavModule],
  exports: [ButtonComponent, FlashCardComponent, CardComponent, NavComponent, NavItemComponent]
})
export class MollyModule {}
