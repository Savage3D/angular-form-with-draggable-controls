import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pf-pricing-add-item',
  templateUrl: './pricing-add-item.component.html',
  styleUrls: ['./pricing-add-item.component.scss']
})
export class PricingAddItemComponent implements OnInit {
  @Output() itemFormInitialized: EventEmitter<FormGroup> = 
    new EventEmitter<FormGroup>();
  itemForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.itemForm = this.fb.group({
      title: [''],
      description: [''],
      price: ['']
    });

    this.itemFormInitialized.emit(this.itemForm);
  }
}
