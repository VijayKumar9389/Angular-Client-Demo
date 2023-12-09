import { Component, OnInit } from '@angular/core';
import {Stakeholder} from "../../core/models/stakeholder.model";
import {ActivatedRoute} from "@angular/router";
import {StakeholderFormComponent} from "./components/stakeholder-form/stakeholder-form.component";
import {DeliveryFormComponent} from "./components/delivery-form/delivery-form.component";
import {TractListComponent} from "./components/tract-list/tract-list.component";

@Component({
  selector: 'app-stakeholder-page',
  standalone: true,
  imports: [StakeholderFormComponent, DeliveryFormComponent, TractListComponent],
  templateUrl: './stakeholder-page.component.html',
  styleUrl: './stakeholder-page.component.scss'
})

export class StakeholderPageComponent implements OnInit {
  stakeholder!: Stakeholder;
  projectId!: string;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    // Subscribe to route params and get the data from the state
    this.route.params.subscribe(params => {

      // Access the state property of the ActivatedRoute
      const navigation = window.history.state;

      // Assign the stakeholder and projectId properties
      this.stakeholder = navigation.data;
      this.projectId = navigation.projectId;
    });
  }
}
