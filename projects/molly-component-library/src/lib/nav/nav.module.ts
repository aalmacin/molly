import { NgModule } from '@angular/core';
import { NavComponent } from './nav.component';
import { NavItemComponent } from './nav-item.component';
import { NavHeaderComponent } from './nav-header.component';

@NgModule({
  declarations: [NavComponent, NavItemComponent, NavHeaderComponent],
  imports: [],
  exports: [NavComponent, NavItemComponent, NavHeaderComponent]
})
export class MolNavModule { }
