import { NgModule } from '@angular/core';
import { NavComponent } from './nav.component';
import { NavItemComponent } from './nav-item.component';
import { NavHeaderComponent } from './nav-header.component';

@NgModule({
  declarations: [NavComponent, NavHeaderComponent, NavItemComponent],
  imports: [],
  exports: [NavComponent, NavHeaderComponent, NavItemComponent]
})
export class MolNavModule { }
