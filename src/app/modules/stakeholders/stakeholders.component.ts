import { Component, OnInit } from '@angular/core';
import { Project } from "../../core/models/project.model";
import { ProjectService } from "../../core/services/project.service";
import {StakeholderListComponent} from "./components/stakeholder-list/stakeholder-list.component";
import {StakeholderInputComponent} from "./components/stakeholder-input/stakeholder-input.component";
import {NgIf} from "@angular/common";
import {StakeholderStatsComponent} from "./components/stakeholder-stats/stakeholder-stats.component";
import {ProjectHeaderComponent} from "../../core/components/project-header/project-header.component";
import {StakeholderService} from "../../core/services/stakeholder.service";
import {Stakeholder} from "../../core/models/stakeholder.model"; // Update the path accordingly

@Component({
  selector: 'app-stakeholders',
  standalone: true,
  imports: [StakeholderListComponent, StakeholderInputComponent, NgIf, StakeholderStatsComponent, ProjectHeaderComponent],
  providers: [ProjectService, StakeholderService],
  templateUrl: './stakeholders.component.html',
  styleUrl: './stakeholders.component.scss'
})

export class StakeholdersComponent implements OnInit {
  stakeholders!: Stakeholder[];
  showFilter: boolean = false;
  selectedProject!: Project | null;

  // Toggle filter
  toggleFilter() {
    this.showFilter = !this.showFilter;
  }

  // Inject project service
  constructor(private projectService: ProjectService, private stakeholderService: StakeholderService) {}

  ngOnInit(): void {

    // Fetch selected project
    this.projectService.selectedProject$.subscribe((selectedProject) => {
      this.selectedProject = selectedProject;

      // Fetch project data
      if (selectedProject) {
        const projectId: number = selectedProject.id;

        // Fetch project data
        this.stakeholderService.getStakeholdersByProjectId(projectId).subscribe((stakeholders: Stakeholder[]): void => {
          this.stakeholders = stakeholders;
        });
      }
    });
  }

}
