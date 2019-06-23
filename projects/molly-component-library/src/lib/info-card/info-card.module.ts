import { NgModule } from '@angular/core';
import { MolButtonModule } from '../button/public-api';
import { InfoCardComponent } from './info-card.component';

@NgModule({
  declarations: [InfoCardComponent],
  exports: [InfoCardComponent],
  imports: [MolButtonModule]
})
export class MolInfoCardModule {}
