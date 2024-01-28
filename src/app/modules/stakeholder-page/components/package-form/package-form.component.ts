import {Component, Input, OnInit} from '@angular/core';
import {Delivery, PackageTypeDTO, PackageAddDTO} from "../../../../core/models/delivery.model";
import {PackageService} from "../../../../core/services/package.service";
import {CommonModule, NgIf} from "@angular/common";
import {DeliveryService} from "../../../../core/services/delivery.service";
import {FormGroup, FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {ProjectService} from "../../../../core/services/project.service";
import {Project} from "../../../../core/models/project.model";

@Component({
  selector: 'app-package-form',
  standalone: true,
  imports: [
    NgIf,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [PackageService, DeliveryService, ProjectService],
  templateUrl: './package-form.component.html',
  styleUrl: './package-form.component.scss'
})

// Implement OnInit interface
export class PackageFormComponent implements OnInit {
  @Input() stakeholderId!: string;
  packageForm!: FormGroup;
  packageTypes: PackageTypeDTO[] = [];
  deliveries: Delivery[] = [];
  selectedProject!: Project | null;

  // Inject the FormBuilder, PackageService, and DeliveryService
  constructor(
    private fb: FormBuilder,
    private packageService: PackageService,
    private deliveryService: DeliveryService,
    private projectService: ProjectService
  ) {}

  // Initialize the form with default values or stakeholder values
  ngOnInit(): void {
    this.packageForm = this.fb.group({
      selectedPackageType: [''],
      selectedDelivery: ['']
    });

    this.projectService.selectedProject$.subscribe((selectedProject: Project | null): void => {
      this.selectedProject = selectedProject;
    });

    // Fetch package types and delivery when the component initializes
    this.fetchPackageTypes();
    this.fetchDeliveries();
  }

  // Accessor for form controls
  onSubmit(): void {
    const selectedPackageTypeId = this.packageForm.value.selectedPackageType;
    const selectedDeliveryId = this.packageForm.value.selectedDelivery;
    const stakeholderId = this.stakeholderId;

    const packageAddDTO: PackageAddDTO = {
      selectedPackageTypeId: selectedPackageTypeId,
      selectedDeliveryId: selectedDeliveryId,
      stakeholderId: stakeholderId
      // Add other properties to the DTO if needed
    };

    // Call the service method to create a new package for an existing delivery
    this.packageService.createPackageForExistingDelivery(packageAddDTO)
      .subscribe(
        (response: any): void => {
          // Handle success (e.g., show a success message, update UI)
          console.log('Package created successfully', response);
        }
      );
  }
  // Fetch package types and delivery
  fetchPackageTypes(): void {
    this.packageService.getPackageTypes(1) // Replace with the actual project ID
      .subscribe(
        (types: PackageTypeDTO[]): void => {
          this.packageTypes = types;
        }
      );
  }

  // Fetch delivery
  fetchDeliveries(): void {
    const projectId = this.selectedProject?.id ?? 0; // Replace 0 with the appropriate default project ID
    this.deliveryService.getDelivery(projectId)
      .subscribe(
        (deliveries: Delivery[]): void => {
          this.deliveries = deliveries;
          console.log(this.deliveries);
        }
      );
  }

}
