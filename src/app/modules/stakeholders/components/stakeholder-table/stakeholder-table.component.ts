import { Component, Input, OnInit } from '@angular/core';
import {Stakeholder} from "../../../../core/models/stakeholder.model";
import {CommonModule} from "@angular/common";
import {StakeholderService} from "../../../../core/services/stakeholder.service";

@Component({
  selector: 'app-stakeholder-table',
  standalone: true,
  imports: [CommonModule],
  providers: [StakeholderService],
  templateUrl: './stakeholder-table.component.html',
  styleUrl: './stakeholder-table.component.scss'
})

export class StakeholderTableComponent {
  @Input() stakeholders?: Stakeholder[];

  constructor(private projectService: StakeholderService) {}

  navigateToStakeholderPage(stakeholder: Stakeholder, projectId: number): void {
    this.projectService.selectStakeholder(stakeholder, projectId);
  }

}
