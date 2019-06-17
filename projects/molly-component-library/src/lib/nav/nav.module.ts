import { NgModule } from '@angular/core';
import { NavHeaderComponent } from './nav-header.component';
import { NavItemEndComponent } from './nav-item-end.component';
import { NavItemComponent } from './nav-item.component';
import { NavComponent } from './nav.component';

@NgModule({
  declarations: [
    NavComponent,
    NavHeaderComponent,
    NavItemComponent,
    NavItemEndComponent
  ],
  imports: [],
  exports: [
    NavComponent,
    NavHeaderComponent,
    NavItemComponent,
    NavItemEndComponent
  ]
})
export class MolNavModule {}
