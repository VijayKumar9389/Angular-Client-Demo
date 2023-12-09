import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TractListComponent } from './tract-list.component';

describe('TractListComponent', () => {
  let component: TractListComponent;
  let fixture: ComponentFixture<TractListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TractListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TractListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
