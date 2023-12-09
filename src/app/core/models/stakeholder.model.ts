import { TractRecord } from './tract-record.model';
export interface Stakeholder {
  id: number;
  name: string;
  streetAddress: string;
  mailingAddress: string;
  phoneNumber: string;
  isPerson: string;
  stakeholderComments: string;
  stakeholderStatus: string;
  contacted: string;
  consultation: string;
  attempts: string;
  email: string;
  followUp: string;
  projectId: number;
  packageId: number;
  tractRecords: TractRecord[];
}
