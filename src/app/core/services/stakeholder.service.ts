import { Injectable } from '@angular/core';
import {Stakeholder} from "../models/stakeholder.model";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class StakeholderService {

  constructor(private router: Router) { }

  // This method is called to navigate to the StakeholderPageComponent
  selectStakeholder(stakeholder: Stakeholder, projectId: number): void {
    console.log('navigate to stakeholder page')
    this.router.navigate(['/stakeholders', stakeholder.id], {
      state: { data: stakeholder, name: 'angular' },
    });
  }
}
