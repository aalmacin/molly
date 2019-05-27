import { NgModule } from '@angular/core';
import { NavComponent } from './nav.component';
import { NavItemComponent } from './nav-item.component';

@NgModule({
  declarations: [NavComponent, NavItemComponent],
  imports: [],
  exports: [NavComponent, NavItemComponent]
})
export class MolNavModule { }
