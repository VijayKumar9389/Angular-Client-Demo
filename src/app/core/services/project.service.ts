import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})

export class ProjectService {
  private apiUrl = 'http://localhost:3005/project';

  private selectedProjectSubject = new BehaviorSubject<Project | null>(this.loadProjectFromLocalStorage());
  selectedProject$: Observable<Project | null> = this.selectedProjectSubject.asObservable();

  constructor(private http: HttpClient) {}

  getProject(projectId: number): Observable<Project> {
    const url = `${this.apiUrl}/get/${projectId}`;
    console.log('Sending request to:', url);
    return this.http.get<Project>(url, { withCredentials: true })
      .pipe(
        catchError(this.handleError)
      );
  }

  getAllProjects(): Observable<Project[]> {
    const url = `${this.apiUrl}/getall`;
    console.log('Sending request to:', url);
    return this.http.get<Project[]>(url, { withCredentials: true })
      .pipe(
        catchError(this.handleError)
      );
  }

  private loadProjectFromLocalStorage(): Project | null {
    const savedProject = localStorage.getItem('selectedProject');
    return savedProject ? JSON.parse(savedProject) : null;
  }

  selectProject(project: Project | null): void {
    this.selectedProjectSubject.next(project);

    // Save selected project to localStorage
    if (project) {
      localStorage.setItem('selectedProject', JSON.stringify(project));
    } else {
      localStorage.removeItem('selectedProject');
    }
  }
  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError('Something went wrong. Please try again later.');
  }
}
