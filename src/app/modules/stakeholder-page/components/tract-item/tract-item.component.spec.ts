import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TractItemComponent } from './tract-item.component';

describe('TractItemComponent', () => {
  let component: TractItemComponent;
  let fixture: ComponentFixture<TractItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TractItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TractItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
