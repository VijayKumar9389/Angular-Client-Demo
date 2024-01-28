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
  imports: [
    StakeholderFormComponent,
    DeliveryFormComponent,
    TractListComponent,
    NgIf,
    PackageFormComponent,
    StakeholderDeliveryComponent
  ],
  templateUrl: './stakeholder-page.component.html',
  styleUrl: './stakeholder-page.component.scss'
})

export class StakeholderPageComponent implements OnInit {
  stakeholder!: Stakeholder;
  projectId!: string;
  isModalOpen = false;
  selectedComponent: string = 'delivery';

  selectComponent(component: string): void {
    this.selectedComponent = component;
  }

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Subscribe to route params and get the data from the state
    this.route.params.subscribe((params): void => {
      // Access the state property of the ActivatedRoute
      const navigation = window.history.state;

      // Assign the stakeholder and projectId properties
      this.stakeholder = navigation.data;
      this.projectId = navigation.projectId;
    });
    console.log(this.stakeholder)

  }

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

}
