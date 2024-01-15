import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StakeholderDeliveryComponent } from './stakeholder-delivery.component';

describe('StakeholderDeliveryComponent', () => {
  let component: StakeholderDeliveryComponent;
  let fixture: ComponentFixture<StakeholderDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StakeholderDeliveryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StakeholderDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
