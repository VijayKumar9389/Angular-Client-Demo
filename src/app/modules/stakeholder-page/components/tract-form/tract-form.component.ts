import {Component, Input, OnInit} from '@angular/core';
import {TractRecord} from "../../../../core/models/tract-record.model";
import {FormsModule} from "@angular/forms";
import {StakeholderService} from "../../../../core/services/stakeholder.service";
import {Stakeholder} from "../../../../core/models/stakeholder.model";
import {TractRecordService} from "../../../../core/services/tract-record.service";
import {TractFormUpdateDTO} from "../../../../core/models/tract-record.model";

@Component({
  selector: 'app-tract-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  providers: [StakeholderService, TractRecordService],
  templateUrl: './tract-form.component.html',
  styleUrl: './tract-form.component.scss'
})

export class TractFormComponent implements OnInit {
  @Input() tractRecord!: TractRecord;
  @Input() stakeholder!: Stakeholder;

  structure: string = '';
  interest: string = '';
  occupants: number = 0; // Change to number
  worksLand: string = '';
  tractComments: string = '';

  constructor(
    private stakeholderService: StakeholderService,
    private tractRecordService: TractRecordService
  ) {}

  ngOnInit(): void {
    // Initialize properties with values from tractRecord
    if (this.tractRecord) {
      this.structure = this.tractRecord.structure || '';
      this.interest = this.tractRecord.interest || '';
      this.occupants = this.tractRecord.occupants || 0; // Initialize to 0 or any default value
      this.worksLand = this.tractRecord.worksLand || '';
      this.tractComments = this.tractRecord.tractComments || '';
    }
  }

  // New method to handle input changes for 'occupants'
  handleOccupantsChange(value: string): void {
    // Parse the value to a number and update the 'occupants' property
    this.occupants = parseInt(value, 10);
  }

  // Handle stakeholder selection
  handleStakeholderSelection(): void {
    // Example: Select a stakeholder
    if (this.stakeholder) {
      this.stakeholderService.selectStakeholder(this.stakeholder, this.stakeholder.projectId);
    }
  }

  // Handle form submission
  handleSubmit(): void {
    // Update the tract record
    const updatedTractRecord: TractFormUpdateDTO = {
      structure: this.structure,
      interest: this.interest,
      occupants: this.occupants,
      worksLand: this.worksLand,
      tractComments: this.tractComments,
    };

    // Make an API call to update the record
    this.tractRecordService.updateTractRecord(this.tractRecord.id, updatedTractRecord)
      .subscribe(
        response => {
          console.log('Tract record updated successfully', response);
          // Handle success if needed
        }
      );
  }
}
