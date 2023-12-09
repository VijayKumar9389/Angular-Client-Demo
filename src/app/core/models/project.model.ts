import { Stakeholder } from './stakeholder.model';

export interface Project {
  id: number;
  name: string;
  year: number;
  notes: string;
  surveyLink: string;
  stakeholders: Stakeholder[];
}
