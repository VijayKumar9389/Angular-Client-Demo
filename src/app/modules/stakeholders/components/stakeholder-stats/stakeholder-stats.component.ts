import {Component, OnInit} from '@angular/core';
import {StakeholderService} from "../../../../core/services/stakeholder.service";
import {StakeholderSummaryDto} from "../../../../core/models/stakeholder.model";

@Component({
  selector: 'app-stakeholder-stats',
  standalone: true,
  imports: [],
  providers: [StakeholderService],
  templateUrl: './stakeholder-stats.component.html',
  styleUrl: './stakeholder-stats.component.scss'
})

export class StakeholderStatsComponent implements OnInit {
  stakeholderSummary: StakeholderSummaryDto = {
    totalCount: 0,
    oneTractCount: 0,
    moreThanOneTractCount: 0,
    attemptedContactCount: 0,
    notAttemptedContactCount: 0,
    consultedCount: 0,
    notConsultedCount: 0,
    deliveryPlannedCount: 0,
    deliveryNotPlannedCount: 0,
    missingPhoneNumbers: 0,
    contactedYesCount: 0,
    contactedNoCount: 0,
  };

  constructor(private stakeholderService: StakeholderService) {}

  ngOnInit(): void {
    this.stakeholderService.getStakeholdersContactSummaryByProjectId(1).subscribe(
      (stakeholderSummary) => {
        this.stakeholderSummary = stakeholderSummary;
        console.log('stakeholderSummary:', stakeholderSummary);
      },
      (error) => {
        console.error('Error fetching stakeholder summary:', error);
        // Handle errors
      }
    );
  }
}
