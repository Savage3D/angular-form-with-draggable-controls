import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { PricingFormComponent } from './pricing-form/pricing-form.component';
import { PricingAddCategoryComponent } from './pricing-add-category/pricing-add-category.component';
import { PricingAddItemComponent } from './pricing-add-item/pricing-add-item.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PricingFormComponent, 
    PricingAddCategoryComponent, 
    PricingAddItemComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [PricingFormComponent]
})
export class PricingModule { }
