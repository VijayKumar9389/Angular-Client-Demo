import { Component, OnInit, Input } from '@angular/core';
import {TractRecordService} from "../../../../core/services/tract-record.service";
import {Stakeholder} from "../../../../core/models/stakeholder.model";
import {NgForOf} from "@angular/common";
import {TractFormComponent} from "../tract-form/tract-form.component";

@Component({
  selector: 'app-tract-item',
  standalone: true,
  imports: [
    NgForOf,
    TractFormComponent
  ],
  providers: [TractRecordService],
  templateUrl: './tract-item.component.html',
  styleUrl: './tract-item.component.scss'
})

export class TractItemComponent implements OnInit {
  @Input() tractNo!: string;
  @Input() projectId!: string;
  stakeholderList?: Stakeholder[] = [];

  constructor(private tractRecordService: TractRecordService) { }

  ngOnInit() {
    // Call the method to fetch stakeholder list
    this.getStakeholderList();
  }

  getStakeholderList() {
    this.tractRecordService.getTractRecord(this.projectId, this.tractNo)
      .subscribe(
        (stakeholders: Stakeholder[]) => {
          this.stakeholderList = stakeholders;
          console.log(this.stakeholderList);
        },
        (error) => {
          console.error('Error fetching stakeholder list:', error);
        }
      );
  }
}
