import {Component, OnInit, ViewChild} from '@angular/core';
import {Stakeholder} from "../../core/models/stakeholder.model";
import {ActivatedRoute} from "@angular/router";
import {StakeholderFormComponent} from "./components/stakeholder-form/stakeholder-form.component";
import {DeliveryFormComponent} from "./components/delivery-form/delivery-form.component";
import {TractListComponent} from "./components/tract-list/tract-list.component";
import {NgIf} from "@angular/common";
import {PackageFormComponent} from "./components/package-form/package-form.component";
import {StakeholderDeliveryComponent} from "./components/stakeholder-delivery/stakeholder-delivery.component";

@Component({
  selector: 'app-stakeholder-page',
  standalone: true,
  imports: [StakeholderFormComponent, DeliveryFormComponent, TractListComponent, NgIf, PackageFormComponent, StakeholderDeliveryComponent],
  templateUrl: './stakeholder-page.component.html',
  styleUrl: './stakeholder-page.component.scss'
})

export class StakeholderPageComponent implements OnInit {
  @ViewChild(StakeholderFormComponent) stakeholderFormComponent!: StakeholderFormComponent;
  stakeholder!: Stakeholder;
  projectId!: string;
  isModalOpen = false;
  addToExisting = false; // Variable to track whether to add to an existing delivery
  selectedComponent: string = 'delivery';

  selectComponent(component: string): void {
    this.selectedComponent = component;
  }

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Subscribe to route params and get the data from the state
    this.route.params.subscribe((params) => {
      // Access the state property of the ActivatedRoute
      const navigation = window.history.state;

      // Assign the stakeholder and projectId properties
      this.stakeholder = navigation.data;
      this.projectId = navigation.projectId;
    });
  }

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.addToExisting = false; // Reset the variable when closing the modal
  }

  // Trigger the onSubmit method of the StakeholderFormComponent
  triggerSubmit(): void {
    if (this.stakeholderFormComponent) {
      this.stakeholderFormComponent.onSubmit();
    }
  }

  createNewDelivery(): void {
    // Handle logic for creating a new delivery
    this.addToExisting = false;
  }

  addToExistingDelivery(): void {
    // Handle logic for adding to an existing delivery
    this.addToExisting = true;
  }
}
