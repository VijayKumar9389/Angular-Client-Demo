import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StakeholderStatsComponent } from './stakeholder-stats.component';

describe('StakeholderStatsComponent', () => {
  let component: StakeholderStatsComponent;
  let fixture: ComponentFixture<StakeholderStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StakeholderStatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StakeholderStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
