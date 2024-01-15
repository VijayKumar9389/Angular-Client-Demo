import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageitemListComponent } from './packageitem-list.component';

describe('PackageitemListComponent', () => {
  let component: PackageitemListComponent;
  let fixture: ComponentFixture<PackageitemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackageitemListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PackageitemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
