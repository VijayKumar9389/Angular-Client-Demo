import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePackageitemFormComponent } from './create-packageitem-form.component';

describe('CreatePackageitemFormComponent', () => {
  let component: CreatePackageitemFormComponent;
  let fixture: ComponentFixture<CreatePackageitemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePackageitemFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatePackageitemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
