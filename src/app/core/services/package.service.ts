import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {PackageTypeDTO, PackageAddDTO} from "../models/delivery.model";

@Injectable({
  providedIn: 'root'
})


export class PackageService {
  private apiUrl: string = 'http://localhost:3005/package'; // Update with your actual API URL

  constructor(private http: HttpClient) {}

  // Create a package for an existing delivery
  createPackageForExistingDelivery(packageData: PackageAddDTO): Observable<any> {
    const url: string = `${this.apiUrl}/create/packageforexistingdelivery`;
    return this.http.post<any>(url, packageData)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Create a new package type
  createPackageType(packageTypeData: any, projectId: number): Observable<any> {
    const url: string = `${this.apiUrl}/create/packagetype/${projectId}`;
    return this.http.post<any>(url, packageTypeData)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Get all package types for a project
  getPackageTypes(projectId: number): Observable<PackageTypeDTO[]> {
    const url: string = `${this.apiUrl}/get/packagetype/${projectId}`;
    return this.http.get<PackageTypeDTO[]>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Cancel a package and reset the stakeholder package ID to null
  cancelPackage(packageId: number, stakeholderId: number): Observable<any> {
    const url: string = `${this.apiUrl}/cancel/package/${packageId}/${stakeholderId}`;
    return this.http.delete<any>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  changePackagePackageType(packageId: number, packageTypeId: number): Observable<any> {
    const url: string = `${this.apiUrl}/change/packagepackagetype/${packageId}/${packageTypeId}`;
    return this.http.put<any>(url, null)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Handle errors
  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return new Observable<never>((observer): void => {
      observer.error('Something went wrong. Please try again later.');
    });
  }


}
