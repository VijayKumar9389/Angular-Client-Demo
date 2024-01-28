import { Component, Input } from '@angular/core';
import { Delivery } from "../../../../core/models/delivery.model";
import {CommonModule} from "@angular/common";
import {DeliveryService} from "../../../../core/services/delivery.service";

@Component({
  selector: 'app-delivery-list',
  standalone: true,
  imports: [CommonModule],
  providers: [DeliveryService],
  templateUrl: './delivery-list.component.html',
  styleUrl: './delivery-list.component.scss'
})
export class DeliveryListComponent {
  @Input() deliveries!: Delivery[];

  constructor(private deliveryService: DeliveryService) {}

  navigateToDeliveryPage(delivery: Delivery, projectId: number): void {
    this.deliveryService.selectDelivery(delivery, projectId);
  }

  hasDeliveries(): boolean {
    return this.deliveries.length > 0;
  }

}
