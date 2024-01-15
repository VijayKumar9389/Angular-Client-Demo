import { Component } from '@angular/core';
import {PackageTypeFormComponent} from "./components/packagetype-form/packagetype-form.component";
import {PackagetypeListComponent} from "./components/packagetype-list/packagetype-list.component";
import {CreateItemFormComponent} from "../items/components/create-item-form/create-item-form.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [
    PackageTypeFormComponent,
    PackagetypeListComponent,
    CreateItemFormComponent,
    NgIf
  ],
  templateUrl: './packages.component.html',
  styleUrl: './packages.component.scss'
})
export class PackagesComponent {
  showFilter: boolean = false;

  toggleFilter(): void {
    this.showFilter = !this.showFilter;
  }

}
