import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TractFormComponent } from './tract-form.component';

describe('TractFormComponent', () => {
  let component: TractFormComponent;
  let fixture: ComponentFixture<TractFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TractFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TractFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
