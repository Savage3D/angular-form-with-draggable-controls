import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingAddCategoryComponent } from './pricing-add-category.component';

describe('PricingAddCategoryComponent', () => {
  let component: PricingAddCategoryComponent;
  let fixture: ComponentFixture<PricingAddCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingAddCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingAddCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
