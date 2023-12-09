import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {PackageTypeDTO} from "../models/delivery.model";

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  private apiUrl: string = 'http://localhost:3005/package'; // Update with your actual API URL

  constructor(private http: HttpClient) {}

  createPackageType(packageTypeData: any, projectId: number): Observable<any> {
    const url: string = `${this.apiUrl}/create/packagetype/${projectId}`;
    return this.http.post<any>(url, packageTypeData)
      .pipe(
        catchError(this.handleError)
      );
  }

  getPackageTypes(projectId: number): Observable<PackageTypeDTO[]> {
    const url: string = `${this.apiUrl}/get/packagetype/${projectId}`;
    return this.http.get<PackageTypeDTO[]>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return new Observable<never>((observer) => {
      observer.error('Something went wrong. Please try again later.');
    });
  }
}
