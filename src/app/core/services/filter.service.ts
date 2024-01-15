import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FilterService {

  private filterSubject: BehaviorSubject<string>;
  private storageKey = 'filter';

  constructor() {
    // Retrieve filter value from localStorage on service initialization
    const storedFilter = localStorage.getItem(this.storageKey);
    const initialFilter = storedFilter ? storedFilter : '';

    // Initialize BehaviorSubject with the retrieved filter value
    this.filterSubject = new BehaviorSubject<string>(initialFilter);
  }

  // get the current filter state
  getFilter(): string {
    return this.filterSubject.value;
  }

  // set the filter state to the new value
  setFilter(filter: string): void {
    // Save the filter value to localStorage
    localStorage.setItem(this.storageKey, filter);

    // Update BehaviorSubject with the new filter value
    this.filterSubject.next(filter);
  }

  // Expose the filter as an observable for other components to subscribe
  getFilterObservable(): Observable<string> {
    return this.filterSubject.asObservable();
  }
}
