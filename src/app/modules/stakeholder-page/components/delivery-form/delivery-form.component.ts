import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { DeliveryService } from '../../../../core/services/delivery.service';
import {PackageService} from "../../../../core/services/package.service";

import { DeliveryDTO } from '../../../../core/models/delivery.model';
import { PackageTypeDTO } from '../../../../core/models/delivery.model';
import { catchError, finalize } from 'rxjs/operators';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-delivery-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [DeliveryService, PackageService],
  templateUrl: './delivery-form.component.html',
  styleUrl: './delivery-form.component.scss'
})

export class DeliveryFormComponent implements OnInit {
  // input properties
  @Input() projectId!: string;
  @Input() stakeholderId!: string;

  // form properties
  createDeliveryForm: FormGroup;
  packageTypes: PackageTypeDTO[] = [];
  isLoading: boolean = false;
  error: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private deliveryService: DeliveryService,
    private packageService: PackageService
  ) {
    this.createDeliveryForm = this.formBuilder.group({
      deliveryDate: ['', Validators.required],
      deliveryStatus: ['', Validators.required],
      deliveryMethod: ['', Validators.required],
      route: ['', Validators.required],
      destination: ['', Validators.required],
      notes: [''],
      selectedPackageType: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.fetchPackageTypes();
  }

  fetchPackageTypes(): void {
    this.packageService.getPackageTypes(1) // Replace with the actual project ID
      .subscribe(
        (types: PackageTypeDTO[]): void => {
          this.packageTypes = types;
        }
      );
  }

  createDelivery(): void {
    if (this.createDeliveryForm.valid) {
      const formData: DeliveryDTO = {
        date: this.createDeliveryForm.value.deliveryDate,
        status: this.createDeliveryForm.value.deliveryStatus,
        route: this.createDeliveryForm.value.route,
        destination: this.createDeliveryForm.value.destination,
        delivery_method: this.createDeliveryForm.value.deliveryMethod,
        notes: this.createDeliveryForm.value.notes,
        projectId: 1, // Replace with the actual project ID
        stakeholderId: 1, // Replace with the actual stakeholder ID
        packageTypeId: this.createDeliveryForm.value.selectedPackageType
      };

      this.isLoading = true;

      this.deliveryService.createDelivery(formData)
        .pipe(
          catchError((error) => {
            console.error('Error creating delivery:', error);
            this.error = 'Error creating delivery';
            throw error; // Re-throw the error to propagate it to the outer catch block
          }),
          finalize((): boolean => this.isLoading = false)
        )
        .subscribe(() => {
          // Reset form state after successful submission
          this.createDeliveryForm.reset();
          this.error = null;
          console.log('Delivery created successfully!');
        });
    }
  }
}
