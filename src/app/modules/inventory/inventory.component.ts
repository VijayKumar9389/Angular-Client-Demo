import { Component } from '@angular/core';
import {ItemsComponent} from "./components/items/items.component";
import {PackagesComponent} from "./components/packages/packages.component";
import {NgIf} from "@angular/common";
import {ProjectHeaderComponent} from "../../core/components/project-header/project-header.component";

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [
    ItemsComponent,
    PackagesComponent,
    NgIf,
    ProjectHeaderComponent
  ],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss'
})
export class InventoryComponent {
  selectedComponent: string = 'items';

  selectComponent(component: string): void {
    this.selectedComponent = component;
  }
}
