import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { MolButtonModule } from './button/button.module';
import { CardComponent } from './card/card.component';
import { MolCardModule } from './card/card.module';
import { FlashCardComponent } from './flash-card/flash-card.component';
import { MolFlashCardModule } from './flash-card/flash-card.module';
import { NavHeaderComponent } from './nav/nav-header.component';
import { NavItemComponent } from './nav/nav-item.component';
import { NavComponent } from './nav/nav.component';
import { MolNavModule } from './nav/nav.module';

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
