import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { PackageService} from "../../../../../../core/services/package.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-packagetype-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  providers: [PackageService],
  templateUrl: './packagetype-form.component.html',
  styleUrl: './packagetype-form.component.css'
})

export class PackageTypeFormComponent {
  packageTypeForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private packageService: PackageService
  ) {
    this.packageTypeForm = this.formBuilder.group({
      name: ['', Validators.required],
      notes: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.packageTypeForm.valid) {
      const formData = this.packageTypeForm.value;

      this.packageService.createPackageType(formData, 1)
        .subscribe(
          (createdPackageType) => {
            console.log('Package Type created:', createdPackageType);
            this.packageTypeForm.reset(); // Optionally, you can reset the form after a successful submission
          }
        );
    }
  }
}
