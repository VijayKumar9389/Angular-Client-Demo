import { Component, OnInit } from '@angular/core';
import {DeliveryService} from "../../core/services/delivery.service";
import {Delivery} from "../../core/models/delivery.model";
import {CommonModule} from "@angular/common";
import {DeliveryListComponent} from "./components/delivery-list/delivery-list.component";
import {DeliveryInputComponent} from "./components/delivery-input/delivery-input.component";

@Component({
  selector: 'app-delivery',
  standalone: true,
  imports: [CommonModule, DeliveryListComponent, DeliveryInputComponent],
  providers: [DeliveryService],
  templateUrl: './delivery.component.html',
  styleUrl: './delivery.component.scss'
})

export class DeliveryComponent implements OnInit {  // Implement OnInit interface
  deliveryData!: Delivery[];

  constructor(private deliveryService: DeliveryService) {}

  ngOnInit(): void {
    const projectId: string = '1';
    this.deliveryService.getDelivery(projectId).subscribe(
      (data: Delivery[]): void => {
        this.deliveryData = data;
        console.log(this.deliveryData)
      }
    );
  }
}
