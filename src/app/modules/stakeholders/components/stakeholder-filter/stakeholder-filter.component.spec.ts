import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StakeholderFilterComponent } from './stakeholder-filter.component';

describe('StakeholderFilterComponent', () => {
  let component: StakeholderFilterComponent;
  let fixture: ComponentFixture<StakeholderFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StakeholderFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StakeholderFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
