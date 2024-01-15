import { Injectable } from '@angular/core';
import {Stakeholder, StakeholderUpdateDTO} from "../models/stakeholder.model";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class StakeholderService {

  constructor(private router: Router, private http: HttpClient) { }

  updateStakeholder(stakeholderId: number, data: StakeholderUpdateDTO): Observable<any> {
    try {
      const endpoint: string = `http://localhost:3005/stakeholder/update/${stakeholderId}`;
     return this.http.post<void>(endpoint, data);
    } catch (error) {
      console.error('Error updating stakeholder:', error);
      throw error;
    }
  }

  getAllUniqueStreetAddresses(projectId: number): Observable<string[]> {
    try {
      const endpoint: string = `http://localhost:3005/stakeholder/getAllUniqueStreetAddresses/${projectId}`;
      return this.http.get<string[]>(endpoint);
    } catch (error) {
      console.error('Error fetching unique street addresses:', error);
      throw error;
    }
  }

  // This method is called to navigate to the StakeholderPageComponent
  selectStakeholder(stakeholder: Stakeholder, projectId: number): void {
    console.log('navigate to stakeholder page')
    this.router.navigate(['/stakeholders', stakeholder.id], {
      state: { data: stakeholder, name: 'angular' },
    });
  }

  getStakeholdersContactSummaryByProjectId(projectId: number): Observable<any> {
    try {
      const endpoint: string = `http://localhost:3005/stakeholder/getStakeholdersContactSummaryByProjectId/${projectId}`;
      return this.http.get<any>(endpoint);
    } catch (error) {
      console.error('Error fetching stakeholder summary:', error);
      throw error;
    }
  }
}
