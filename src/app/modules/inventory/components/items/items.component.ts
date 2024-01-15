import {Component} from '@angular/core';
import {CreateItemFormComponent} from "./components/create-item-form/create-item-form.component";
import {ItemListComponent} from "./components/item-list/item-list.component";
import {NgIf} from "@angular/common";
import {
  StakeholderFilterComponent
} from "../../../stakeholders/components/stakeholder-filter/stakeholder-filter.component";

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CreateItemFormComponent, ItemListComponent, NgIf, StakeholderFilterComponent],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss'
})

export class ItemsComponent {
  showFilter: boolean = false;

  toggleFilter(): void {
    this.showFilter = !this.showFilter;
  }

}
