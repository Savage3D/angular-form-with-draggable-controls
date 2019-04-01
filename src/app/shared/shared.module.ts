import { AngularMaterialModule } from './angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  exports: [
    CommonModule,
    AngularMaterialModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }
