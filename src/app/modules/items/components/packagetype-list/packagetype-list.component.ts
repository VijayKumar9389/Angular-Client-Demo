import {Component, OnInit} from '@angular/core';
import {PackageService} from "../../../../core/services/package.service";
import {PackageTypeDTO} from "../../../../core/models/delivery.model";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-packagetype-list',
  standalone: true,
  imports: [CommonModule],
  providers: [PackageService],
  templateUrl: './packagetype-list.component.html',
  styleUrl: './packagetype-list.component.css'
})

export class PackagetypeListComponent implements OnInit {
  packageTypes?: PackageTypeDTO[];

  constructor(private packageService: PackageService) {
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
}
