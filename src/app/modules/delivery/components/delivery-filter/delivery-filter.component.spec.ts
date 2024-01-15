import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryFilterComponent } from './delivery-filter.component';

describe('DeliveryFilterComponent', () => {
  let component: DeliveryFilterComponent;
  let fixture: ComponentFixture<DeliveryFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeliveryFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
