import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbCardModule } from '@nebular/theme';



@NgModule({
  exports: [
    NbCardModule, NbButtonModule
  ],
  imports: [
    CommonModule
  ]
})
export class NebularModule { }
