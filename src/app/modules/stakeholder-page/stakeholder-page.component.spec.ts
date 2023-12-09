import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StakeholderPageComponent } from './stakeholder-page.component';

describe('StakeholderPageComponent', () => {
  let component: StakeholderPageComponent;
  let fixture: ComponentFixture<StakeholderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StakeholderPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StakeholderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
