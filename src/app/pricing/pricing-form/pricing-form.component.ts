import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, AbstractControl } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'pf-pricing-form',
  templateUrl: './pricing-form.component.html',
  styleUrls: ['./pricing-form.component.scss']
})
export class PricingFormComponent implements OnInit {
  pricingForm: FormGroup;

  get items(): FormArray {
    return <FormArray>this.pricingForm.get('items');
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.pricingForm = this.fb.group({
      items: this.fb.array([this.buildItem()])
    });
  }

  buildItem(): FormGroup {
    return this.fb.group({
      title: [''],
      description: [''],
      price: ['']
    });
  }

  addItem(): void {
    this.items.push(this.buildItem());
  }

  removeItem(index: number): void {
    this.items.removeAt(index);
  }

  dropItem(event: CdkDragDrop<AbstractControl[]>) {
    moveItemInArray(this.items.controls, event.previousIndex, event.currentIndex);
  }

  save(): void {
    console.log(this.pricingForm.value);
  };
}
