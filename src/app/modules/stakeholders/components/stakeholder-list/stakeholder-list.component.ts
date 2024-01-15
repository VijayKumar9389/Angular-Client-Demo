import { Component, Input, OnInit } from '@angular/core';
import {Stakeholder} from "../../../../core/models/stakeholder.model";
import {CommonModule} from "@angular/common";
import {StakeholderService} from "../../../../core/services/stakeholder.service";

@Component({
  selector: 'app-stakeholder-list',
  standalone: true,
  imports: [CommonModule],
  providers: [StakeholderService],
  templateUrl: './stakeholder-list.component.html',
  styleUrl: './stakeholder-list.component.scss'
})

export class StakeholderListComponent implements OnInit {
  @Input() stakeholders?: Stakeholder[];

  constructor(private projectService: StakeholderService) {}

  ngOnInit(): void {
    if (this.stakeholders) {
      this.stakeholders = this.stakeholders.sort((a, b) => a.id - b.id);
    }
  }

  navigateToStakeholderPage(stakeholder: Stakeholder, projectId: number): void {
    this.projectService.selectStakeholder(stakeholder, projectId);
  }

  // Inside your component class
  getStatusDescription(status: string): string {
    switch (status) {
      case 'GREEN':
        return 'Good';
      case 'YELLOW':
        return 'Caution';
      case 'RED':
        return 'Warning';
      default:
        return 'Unknown Status';
    }
  }
}
