import { Component, OnInit, Input} from '@angular/core';
import {ProjectService} from "../../services/project.service";
import {Project} from "../../models/project.model";
import {NgForOf, NgIf} from "@angular/common";
import {
  CreateItemFormComponent
} from "../../../modules/inventory/components/items/components/create-item-form/create-item-form.component";

@Component({
  selector: 'app-project-header',
  standalone: true,
  imports: [NgForOf, CreateItemFormComponent, NgIf],
  providers: [ProjectService],
  templateUrl: './project-header.component.html',
  styleUrl: './project-header.component.scss'
})

export class ProjectHeaderComponent implements OnInit {
  projects!: Project[];
  @Input() pageName!: string;
  showPopup: boolean = false;
  selectedProject!: Project | null;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.selectedProject$.subscribe((selectedProject) => {
      this.selectedProject = selectedProject;
    });

    this.projectService.getAllProjects().subscribe(
      (data: Project[]): void => {
        this.projects = data;
        console.log(this.projects);
      }
    );
  }

  togglePopup() {
    this.showPopup = !this.showPopup;
    // Reset selectedProject when closing the modal

  }

  selectProject(project: Project) {
    this.projectService.selectProject(project);
    window.location.reload();
  }
}

