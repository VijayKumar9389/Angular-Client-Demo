import { Component, OnDestroy } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Subscription} from "rxjs";
import {FilterService} from "../../../../core/services/filter.service";
import {NgIf} from "@angular/common";
import {StakeholderFilterComponent} from "../stakeholder-filter/stakeholder-filter.component";

@Component({
  selector: 'app-stakeholder-input',
  standalone: true,
    imports: [FormsModule, NgIf, StakeholderFilterComponent],
  providers: [FilterService],
  templateUrl: './stakeholder-input.component.html',
  styleUrl: './stakeholder-input.component.scss'
})

export class StakeholderInputComponent implements OnDestroy {
  filter: string = '';
  selectedFilter: string = 'option1';
  searchText: string = '';
  private filterSubscription: Subscription;
  showFilter: boolean = false;

  toggleFilter(): void {
    this.showFilter = !this.showFilter;
  }

  // Inject the filter service into the constructor
  constructor(private filterService: FilterService) {
    // Subscribe to the filter changes
    this.filterSubscription = this.filterService.getFilterObservable().subscribe(filter => {
      this.filter = filter;
      // Do something with the updated filter in this component
    });
  }


  // Unsubscribe from the filter changes
  ngOnDestroy(): void {
    // Unsubscribe to avoid memory leaks
    this.filterSubscription.unsubscribe();
  }

  // Update the filter with the selected option and search text
  updateFilter(): void {
    const fullFilter = `${this.selectedFilter}:${this.searchText}`;
    this.filterService.setFilter(fullFilter);
  }

  // Retrieve the current filter
  getFilter(): string {
    return this.filterService.getFilter();
  }
}
