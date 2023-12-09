import { Component } from '@angular/core';
import {PackageTypeFormComponent} from "./components/packagetype-form/packagetype-form.component";
import {PackagetypeListComponent} from "./components/packagetype-list/packagetype-list.component";

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [PackageTypeFormComponent, PackagetypeListComponent],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {

}
