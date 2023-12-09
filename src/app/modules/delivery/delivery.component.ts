import { Component, OnInit } from '@angular/core';
import {DeliveryService} from "../../core/services/delivery.service";
import {Delivery} from "../../core/models/delivery.model";

@Component({
  selector: 'app-delivery',
  standalone: true,
  imports: [],
  providers: [DeliveryService],
  templateUrl: './delivery.component.html',
  styleUrl: './delivery.component.css'
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
