import { Component, OnInit } from '@angular/core';
import { Project } from "../../core/models/project.model";
import { ProjectService } from "../../core/services/project.service";
import {StakeholderListComponent} from "./components/stakeholder-list/stakeholder-list.component";
import {StakeholderInputComponent} from "./components/stakeholder-input/stakeholder-input.component";
import {NgIf} from "@angular/common";
import {StakeholderStatsComponent} from "./components/stakeholder-stats/stakeholder-stats.component"; // Update the path accordingly

@Component({
  selector: 'app-stakeholders',
  standalone: true,
  imports: [StakeholderListComponent, StakeholderInputComponent, NgIf, StakeholderStatsComponent],
  providers: [ProjectService],
  templateUrl: './stakeholders.component.html',
  styleUrl: './stakeholders.component.scss'
})

export class StakeholdersComponent implements OnInit {
  projectData!: Project;
  showFilter: boolean = false;

  toggleFilter() {
    this.showFilter = !this.showFilter;
  }

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    const projectId: string = '1'; // Replace with the actual project ID
    this.projectService.getProject(projectId).subscribe(
      (data: Project): void => {
        this.projectData = data;
      }
    );
  }
}
