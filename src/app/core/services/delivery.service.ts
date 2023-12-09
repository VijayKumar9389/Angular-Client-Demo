import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Delivery } from '../models/delivery.model';
import { DeliveryDTO } from '../models/delivery.model'; // Import DeliveryDTO from your model

@Injectable({
  providedIn: 'root'
})

export class DeliveryService {

  private apiUrl = 'http://localhost:3005/delivery';

  constructor(private http: HttpClient) { }

  getDelivery(deliveryId: string): Observable<Delivery[]> {
    const url: string = `${this.apiUrl}/getbyproject/${deliveryId}`;
    console.log('Sending request to:', url);
    return this.http.get<Delivery[]>(url, { withCredentials: true })
      .pipe(
        catchError(this.handleError)
      );
  }

  createDelivery(formData: DeliveryDTO): Observable<any> {
    // Simulate a delay (replace this with actual API call)
    console.log('Creating delivery:', formData);
    return new Observable((observer) => {
      setTimeout(() => {
        // Example: Make an API call to create a delivery
        this.http.post(`${this.apiUrl}/create/delivery`, {
          ...formData,
          packageTypeId: formData.packageTypeId !== null ? Number(formData.packageTypeId) : null, // Convert to number or null
          stakeholderId: formData.stakeholderId,
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        }).subscribe(
          (response) => {
            console.log('Delivery created successfully!');
            observer.next(response);
            observer.complete();
          },
          (error) => {
            console.error('Error creating delivery:', error);
            observer.error('Error creating delivery');
          }
        );
      }, 1000);
    });
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError('Something went wrong. Please try again later.');
  }
}
