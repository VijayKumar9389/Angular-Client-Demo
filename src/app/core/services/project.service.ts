import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})

export class ProjectService {
  private apiUrl = 'http://localhost:3005/project';

  constructor(private http: HttpClient) {}

  getProject(projectId: string): Observable<Project> {
    const url = `${this.apiUrl}/get/${projectId}`;
    console.log('Sending request to:', url);
    return this.http.get<Project>(url, { withCredentials: true })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError('Something went wrong. Please try again later.');
  }
}
