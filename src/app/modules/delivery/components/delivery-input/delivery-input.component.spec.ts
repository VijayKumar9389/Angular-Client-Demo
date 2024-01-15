import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryInputComponent } from './delivery-input.component';

describe('DeliveryInputComponent', () => {
  let component: DeliveryInputComponent;
  let fixture: ComponentFixture<DeliveryInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeliveryInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
