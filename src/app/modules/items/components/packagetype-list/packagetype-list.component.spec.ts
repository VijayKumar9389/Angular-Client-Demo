import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagetypeListComponent } from './packagetype-list.component';

describe('PackagetypeListComponent', () => {
  let component: PackagetypeListComponent;
  let fixture: ComponentFixture<PackagetypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackagetypeListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PackagetypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
