import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {ItemDTO} from "../models/item.model";
import {PackageTypeDTO} from "../models/delivery.model";

@Injectable({
  providedIn: 'root'
})

export class ItemService {
  private apiUrl: string = 'http://localhost:3005/item'; // Update with your actual API URL

  constructor(private http: HttpClient) {
  }

  // Create a new item
  createItem(formData: FormData): Observable<any> {
    const url: string = `${this.apiUrl}/create`;
    return this.http.post<any>(url, formData).pipe(
      catchError(this.handleError)
    );
  }

  // Get all items for a project
  getItems(projectId: number): Observable<ItemDTO[]> {
    const url: string = `${this.apiUrl}/getall/${projectId}`;
    return this.http.get<ItemDTO[]>(url).pipe(
      catchError(this.handleError)
    );
  }

  // Create a new package item
  createPackageItem(itemID: number, packageTypeID: number, notes: string): Observable<any> {
    const url: string = `${this.apiUrl}/createpackageitem`;
    const body = {
      itemID,
      packageTypeID,
      notes
    };
    return this.http.post<any>(url, body).pipe(
      catchError(this.handleError)
    );
  }

  // Delete a package item
  deletePackageItem(packageItemId: number): Observable<any> {
    const url: string = `${this.apiUrl}/delete/${packageItemId}`;
    return this.http.delete<any>(url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError('Something went wrong. Please try again later.');
  }
}
