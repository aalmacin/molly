import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MolButtonModule } from '../button/button.module';
import { ImageJumbotronComponent } from './image-jumbotron.component';

@NgModule({
  declarations: [ImageJumbotronComponent],
  exports: [ImageJumbotronComponent],
  imports: [CommonModule, MolButtonModule]
})
export class MolJumbotronModule {}
