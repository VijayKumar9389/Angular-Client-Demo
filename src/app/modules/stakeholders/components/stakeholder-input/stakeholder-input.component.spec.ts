import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StakeholderInputComponent } from './stakeholder-input.component';

describe('StakeholderInputComponent', () => {
  let component: StakeholderInputComponent;
  let fixture: ComponentFixture<StakeholderInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StakeholderInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StakeholderInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
