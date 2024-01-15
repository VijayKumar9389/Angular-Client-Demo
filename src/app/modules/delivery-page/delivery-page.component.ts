import {Component, OnInit} from '@angular/core';
import {Delivery} from "../../core/models/delivery.model";
import {ActivatedRoute} from "@angular/router";
import {PackageListComponent} from "./components/package-list/package-list.component";

@Component({
  selector: 'app-delivery-page',
  standalone: true,
  imports: [
    PackageListComponent
  ],
  templateUrl: './delivery-page.component.html',
  styleUrl: './delivery-page.component.scss'
})

export class DeliveryPageComponent implements OnInit {
  delivery!: Delivery;
  projectId!: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>
    {
      const navigation = window.history.state;
      this.delivery = navigation.data;
      this.projectId = navigation.projectId;
    })
  }

  triggerSubmit(): void {
    console.log('submitting');
  }

}
