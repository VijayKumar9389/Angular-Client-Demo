export interface TractRecord {
  id: number;
  tract: string;
  pin: string;
  structure: string;
  interest: string;
  occupants: number;
  worksLand: string;
  tractComments: string;
  pipelineStatus: string;
  commodity: string;
  pageNumber: number;
  keepdelete: string;
}

export interface TractFormUpdateDTO {
  structure: string;
  interest: string;
  occupants: number;
  worksLand: string;
  tractComments: string;
}
