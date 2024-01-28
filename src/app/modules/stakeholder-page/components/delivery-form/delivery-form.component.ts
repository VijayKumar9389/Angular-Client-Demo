import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { DeliveryService } from '../../../../core/services/delivery.service';
import {PackageService} from "../../../../core/services/package.service";
import { DeliveryDTO } from '../../../../core/models/delivery.model';
import { PackageTypeDTO } from '../../../../core/models/delivery.model';
import { catchError, finalize } from 'rxjs/operators';
import {CommonModule} from "@angular/common";
import {Stakeholder} from "../../../../core/models/stakeholder.model";

@Component({
  selector: 'app-delivery-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [DeliveryService, PackageService],
  templateUrl: './delivery-form.component.html',
  styleUrl: './delivery-form.component.scss'
})

export class DeliveryFormComponent implements OnInit {
  @Input() projectId!: string;
  @Input() stakeholder!: Stakeholder;
  @Input() stakeholderStreet!: string;
  @Input() stakeholderAddress!: string;

  createDeliveryForm: FormGroup;
  packageTypes: PackageTypeDTO[] = [];
  isLoading: boolean = false;
  error: string | null = null;
  currentStep: number = 1;


  constructor(
    private formBuilder: FormBuilder,
    private deliveryService: DeliveryService,
    private packageService: PackageService
  ) {
    this.createDeliveryForm = this.formBuilder.group({
      deliveryMethod: ['', Validators.required],
      deliveryDate: [''],
      route: ['', Validators.required],
      destination: ['', Validators.required],
      notes: [''],
      selectedPackageType: ['', Validators.required],
      addonOptions: [''],
      location: [''],
      destinationType: [''],
    });
  }

  ngOnInit(): void {
    this.fetchPackageTypes();
  }

  fetchPackageTypes(): void {
    this.packageService.getPackageTypes(1)
      .subscribe(
        (types: PackageTypeDTO[]): void => {
          this.packageTypes = types;
        }
      );
  }


  // Set Stakeholder location or custom location
  changeDestinationType(): void {
    const selectedDestinationType = this.createDeliveryForm.get('destinationType')?.value;
    if (selectedDestinationType === 'custom') {
      console.log('Custom destination selected');
      this.createDeliveryForm.get('location')?.patchValue(this.stakeholder.streetAddress);
    } else if (selectedDestinationType === 'current') {
      this.createDeliveryForm.get('destination')?.patchValue(this.createDeliveryForm.get('location')?.value);
      console.log('Current location selected');
    }
  }

  // Set Delivery Type
  onDeliveryMethodChange(): void {
    const selectedDeliveryMethod = this.createDeliveryForm.get('deliveryMethod')?.value;
    // If in person, set the location to the stakeholder's street address
    if (selectedDeliveryMethod === 'person') {
      this.createDeliveryForm.get('location')?.patchValue(this.stakeholder.streetAddress);
    } else if (selectedDeliveryMethod === 'mail') {
      this.createDeliveryForm.get('location')?.patchValue(this.stakeholder.mailingAddress);
    }
  }

  // Returns true if the addon option is selected
  isAddonSelected(): boolean {
    const location = this.createDeliveryForm.get('location')?.value;
    return location !== '';
  }

  nextStep(): void {
      this.currentStep++;
  }

  prevStep(): void {
    this.currentStep--;
  }


  createDelivery(): void {
    if (this.createDeliveryForm.valid) {
      const formData: DeliveryDTO = {
        route: this.createDeliveryForm.value.route,
        destination: this.createDeliveryForm.value.destination,
        delivery_method: this.createDeliveryForm.value.deliveryMethod,
        notes: this.createDeliveryForm.value.notes,
        projectId: 1, // Use the input property
        stakeholderId: Number(this.stakeholder.id),
        packageTypeId: this.createDeliveryForm.value.selectedPackageType
      };

      this.isLoading = true;

      this.deliveryService.createDelivery(formData)
        .pipe(
          catchError((error) => {
            console.error('Error creating delivery:', error);
            this.error = 'Error creating delivery';
            throw error;
          }),
          finalize((): boolean => this.isLoading = false)
        )
        .subscribe(() => {
          // Reset form state after successful submission
          this.createDeliveryForm.reset();
          this.error = null;
          this.currentStep = 1; // Reset to the first step
          console.log('Delivery created successfully!');
        });
    }
  }

  protected readonly location = location;
}
