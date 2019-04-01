import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pf-pricing-add-category',
  templateUrl: './pricing-add-category.component.html',
  styleUrls: ['./pricing-add-category.component.scss']
})
export class PricingAddCategoryComponent implements OnInit {
  @Output() formInitialized: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  categoryForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.categoryForm = this.fb.group({
      title: ['']
    });

    this.formInitialized.emit(this.categoryForm);
  }
}
