import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import * as XLSX from "xlsx";
import {NgForOf, NgIf} from "@angular/common";

interface ProjectRecord {
  tract: number;
  position: number;
  pin: string;
  structure: string;
  interest: string;
  stakeholderStatus: string;
  name: string;
  streetAddress: string;
  mailingAddress: string;
  phoneNumber: string;
  occupants: number;
  worksLand: string;
  contacted: string;
  attempts: string;
  consultation: string;
  followUp: string;
  tractComments: string;
  pageNo: string;
  keepDelete: string;
  email: string;
  Commodity: string;
  pipelineStatus: string;
  isPerson: string;
  stakeholderComments: string;
}

interface ProjectInput {
  name: string;
  year: number;
  notes: string | null;
  surveyLink: string | null;
  projectRecords: ProjectRecord[];
}


@Component({
  selector: 'app-create-project-form',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    ReactiveFormsModule
  ],
  templateUrl: './create-project-form.component.html',
  styleUrl: './create-project-form.component.css'
})

export class CreateProjectFormComponent {
  projectForm: FormGroup;
  jsonData: ProjectRecord[] | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.projectForm = this.fb.group({
      projectName: '',
      projectYear: new Date().getFullYear(),
      projectNotes: '',
      projectSurveyLink: '',
      fileInput: null
    });
  }
  handleFileUpload(event: any): void {
    const file: File = event.target.files[0];

    const reader: FileReader = new FileReader();
    reader.onload = () => {
      const data = new Uint8Array(reader.result as ArrayBuffer);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      const projectRecords: ProjectRecord[] = jsonData.slice(1).map((row: any, index: number) => {
        return {
          position: index,
          tract: parseInt(row[0], 10) || 0,
          pin: row[1] || '',
          structure: row[2] || '',
          interest: row[3] || '',
          stakeholderStatus: row[4] || '',
          name: row[5] || '',
          streetAddress: row[6] || '',
          mailingAddress: row[7] || '',
          phoneNumber: row[8] || '',
          occupants: parseInt(row[9], 10) || 0,
          worksLand: row[10] || '',
          contacted: row[11] || '',
          attempts: row[12] || '',
          consultation: row[13] || '',
          followUp: row[14] || '',
          tractComments: row[15] || '',
          pageNo: row[16] || '',
          keepDelete: row[17] || '',
          email: row[18] || '',
          Commodity: row[19] || '',
          pipelineStatus: row[20] || '',
          isPerson: '',
          stakeholderComments: '',
        };
      });

      this.jsonData = projectRecords;
    };

    reader.readAsArrayBuffer(file);
  }

  handleSaveClick(): void {
    console.log('Saving project...');
    const projectName = this.projectForm.get('projectName')?.value;
    const projectYear = this.projectForm.get('projectYear')?.value;
    const projectNotes = this.projectForm.get('projectNotes')?.value;
    const projectSurveyLink = this.projectForm.get('projectSurveyLink')?.value;

    if (this.jsonData && this.jsonData.length > 0) {
      const currentYear = new Date().getFullYear();

      const projectRecords = this.jsonData.map((record: ProjectRecord) => ({
        tract: record.tract,
        position: record.position,
        pin: record.pin,
        structure: record.structure,
        interest: record.interest,
        stakeholderStatus: record.stakeholderStatus,
        name: record.name,
        streetAddress: record.streetAddress,
        mailingAddress: record.mailingAddress,
        phoneNumber: record.phoneNumber,
        occupants: record.occupants,
        worksLand: record.worksLand,
        contacted: record.contacted,
        attempts: record.attempts,
        consultation: record.consultation,
        followUp: record.followUp,
        tractComments: record.tractComments,
        pageNo: record.pageNo,
        keepDelete: record.keepDelete,
        email: record.email,
        Commodity: record.Commodity,
        pipelineStatus: record.pipelineStatus,
        isPerson: record.isPerson,
        stakeholderComments: record.stakeholderComments,
        year: currentYear,
      }));

      const projectInput: ProjectInput = {
        name: projectName,
        year: projectYear,
        notes: projectNotes,
        surveyLink: projectSurveyLink,
        projectRecords: projectRecords,
      };

      console.log(projectInput);

      this.http.post('http://localhost:3005/project/create', projectInput)
        .subscribe(
          (data) => {
            console.log('Project created successfully', data);
          },
          (error) => {
            console.error('Error creating project', error);
          }
        );
    }
  }

  protected readonly Object = Object;
}
