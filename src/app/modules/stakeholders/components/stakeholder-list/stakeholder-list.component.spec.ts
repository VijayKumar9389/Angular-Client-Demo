import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StakeholderListComponent } from './stakeholder-list.component';

describe('StakeholderTableComponent', () => {
  let component: StakeholderListComponent;
  let fixture: ComponentFixture<StakeholderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StakeholderListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StakeholderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
