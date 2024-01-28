import { Component, OnInit } from '@angular/core';
import {DeliveryService} from "../../core/services/delivery.service";
import {Delivery} from "../../core/models/delivery.model";
import {Project} from "../../core/models/project.model";
import {CommonModule} from "@angular/common";
import {DeliveryListComponent} from "./components/delivery-list/delivery-list.component";
import {DeliveryInputComponent} from "./components/delivery-input/delivery-input.component";
import {ProjectHeaderComponent} from "../../core/components/project-header/project-header.component";
import {ProjectService} from "../../core/services/project.service";

@Component({
  selector: 'app-delivery',
  standalone: true,
  imports: [CommonModule, DeliveryListComponent, DeliveryInputComponent, ProjectHeaderComponent],
  providers: [DeliveryService, ProjectService],
  templateUrl: './delivery.component.html',
  styleUrl: './delivery.component.scss'
})

export class DeliveryComponent implements OnInit {
  deliveryData!: Delivery[];
  selectedProject!: Project | null;

  constructor(private deliveryService: DeliveryService, private projectService: ProjectService) {}

  ngOnInit(): void {


    this.projectService.selectedProject$.subscribe((selectedProject) => {
      this.selectedProject = selectedProject;

      // Fetch project data
      if (selectedProject) {
        this.deliveryService.getDelivery(selectedProject.id).subscribe((data: Delivery[]): void => {
            this.deliveryData = data;
            console.log(this.deliveryData)
          }
        );
      }
    });




  }
}
