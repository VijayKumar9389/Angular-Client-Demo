import { Component, Input, OnInit } from '@angular/core';
import { Package } from '../../../../core/models/delivery.model';
import {CommonModule} from "@angular/common";
import {PackageService} from "../../../../core/services/package.service";
import {PackageTypeDTO} from "../../../../core/models/delivery.model";
import {FormsModule} from "@angular/forms";
import {StakeholderService} from "../../../../core/services/stakeholder.service";
import {Stakeholder} from "../../../../core/models/stakeholder.model";

@Component({
  selector: 'app-package-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [PackageService, StakeholderService, PackageService],
  templateUrl: './package-list.component.html',
  styleUrl: './package-list.component.scss'
})

export class PackageListComponent implements OnInit {
  @Input() packages?: Package[];
  packageTypes?: PackageTypeDTO[];
  selectedPackageTypeId: number = 0;

  constructor(private packageService: PackageService, private stakeholderService: StakeholderService) {
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

  changePackagePackageType(packageId: number, packageTypeId: number): void {
    this.packageService.changePackagePackageType(packageId, this.selectedPackageTypeId!).subscribe(
      (data: Package): void => {
        console.log(data);
        window.location.reload();
      }
    );
  }

  cancelPackage(packageId: number, stakeholderId: number): void {
    this.packageService.cancelPackage(packageId, stakeholderId).subscribe(
      (data: Package): void => {
        console.log(data);
        window.location.reload();
      }
    );
  }

  //view stakeholder
navigateToStakeholderPage(stakeholder: Stakeholder, stakeholderId: number): void {
  this.stakeholderService.selectStakeholder(stakeholder, stakeholderId);
}

}
