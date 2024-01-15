import { Component } from '@angular/core';
import {CreateProjectFormComponent} from "./components/create-project-form/create-project-form.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CreateProjectFormComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
