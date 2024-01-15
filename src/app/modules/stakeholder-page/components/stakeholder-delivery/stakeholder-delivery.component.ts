import { Component, Input } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-stakeholder-delivery',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './stakeholder-delivery.component.html',
  styleUrl: './stakeholder-delivery.component.css'
})
export class StakeholderDeliveryComponent {
  @Input() packageId!: number | null;



}
