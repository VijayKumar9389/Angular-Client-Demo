import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stakeholder } from '../models/stakeholder.model';
import {TractFormUpdateDTO, TractRecord} from '../models/tract-record.model';

@Injectable({
  providedIn: 'root'
})

export class TractRecordService {
  private baseUrl: string = 'http://localhost:3005/tract-record';

  // Inject HttpClient into the constructor
  constructor(private http: HttpClient) {}

  // Get tract record by project id and tract number
  getTractRecord(projectId: string, tractNo: string): Observable<Stakeholder[]> {
    const url: string = `${this.baseUrl}/get/${projectId}/${tractNo}`;
    return this.http.get<Stakeholder[]>(url);
  }

  // New method to update the tract record
  updateTractRecord(tractId: number, updatedTractRecord: TractFormUpdateDTO): Observable<any> {
    const url: string = `${this.baseUrl}/update/${tractId}`;
    return this.http.put(url, updatedTractRecord);
  }
}
