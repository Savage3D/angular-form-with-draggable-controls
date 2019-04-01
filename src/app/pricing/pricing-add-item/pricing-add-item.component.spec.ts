import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingAddItemComponent } from './pricing-add-item.component';

describe('PricingAddItemComponent', () => {
  let component: PricingAddItemComponent;
  let fixture: ComponentFixture<PricingAddItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingAddItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingAddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
