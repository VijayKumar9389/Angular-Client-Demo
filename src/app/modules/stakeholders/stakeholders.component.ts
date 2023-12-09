import { Component, OnInit } from '@angular/core';
import { Project } from "../../core/models/project.model";
import { ProjectService } from "../../core/services/project.service";
import {StakeholderTableComponent} from "./components/stakeholder-table/stakeholder-table.component"; // Update the path accordingly

@Component({
  selector: 'app-stakeholders',
  standalone: true,
  imports: [StakeholderTableComponent],
  providers: [ProjectService],
  templateUrl: './stakeholders.component.html',
  styleUrl: './stakeholders.component.scss'
})

export class StakeholdersComponent implements OnInit {
  projectData!: Project;

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
