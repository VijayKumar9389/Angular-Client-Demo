import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageTypeFormComponent } from './packagetype-form.component';

describe('PackagetypeFormComponent', () => {
  let component: PackageTypeFormComponent;
  let fixture: ComponentFixture<PackageTypeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackageTypeFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackageTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
