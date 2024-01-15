import {Component, OnInit} from '@angular/core';
import {PackageService} from "../../../../../../core/services/package.service";
import {PackageTypeDTO} from "../../../../../../core/models/delivery.model";
import {CommonModule} from "@angular/common";
import {CreatePackageitemFormComponent} from "../create-packageitem-form/create-packageitem-form.component";
import {PackageitemListComponent} from "../packageitem-list/packageitem-list.component";
import {ItemService} from "../../../../../../core/services/item.service";

@Component({
  selector: 'app-packagetype-list',
  standalone: true,
  imports: [CommonModule, CreatePackageitemFormComponent, PackageitemListComponent],
  providers: [PackageService, ItemService],
  templateUrl: './packagetype-list.component.html',
  styleUrl: './packagetype-list.component.scss'
})

export class PackagetypeListComponent implements OnInit {
  packageTypes?: PackageTypeDTO[];

  constructor(private packageService: PackageService, private itemService: ItemService) {
  }

  ngOnInit(): void {
    const projectId: number = 1; // Replace with the actual project ID
    this.packageService.getPackageTypes(projectId).subscribe(
      (data: PackageTypeDTO[]): void => {
        this.packageTypes = data;
        console.log(this.packageTypes);
      }
    );
  }

  deletePackageItem(packageItemId: number): void {
    this.itemService.deletePackageItem(packageItemId).subscribe(
      (data: any): void => {
        console.log(data);
      }
    );
  }
}
