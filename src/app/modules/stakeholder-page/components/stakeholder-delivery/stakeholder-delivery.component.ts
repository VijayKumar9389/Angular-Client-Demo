import {Component, Input, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {DeliveryService} from "../../../../core/services/delivery.service";
import {Delivery} from "../../../../core/models/delivery.model";

@Component({
  selector: 'app-stakeholder-delivery',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  providers: [DeliveryService],
  templateUrl: './stakeholder-delivery.component.html',
  styleUrl: './stakeholder-delivery.component.scss'
})
export class StakeholderDeliveryComponent implements OnInit{
  @Input() packageId!: number | null;
  delivery?: Delivery;

  constructor(private deliveryService: DeliveryService) {}

  ngOnInit(): void {
    this.deliveryService.getDeliverybyPackageId(this.packageId!).subscribe(
      (data: any): void => {
        console.log('Delivery data:');
        console.log(data);
        this.delivery = data;
      }
    );
  }

}
