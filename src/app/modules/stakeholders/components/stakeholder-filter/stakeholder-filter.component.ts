import {Component, OnInit} from '@angular/core';
import {StakeholderService} from "../../../../core/services/stakeholder.service";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-stakeholder-filter',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  providers: [StakeholderService],
  templateUrl: './stakeholder-filter.component.html',
  styleUrl: './stakeholder-filter.component.scss'
})

export class StakeholderFilterComponent implements OnInit{
  streetAddresses: string[] = [];

    constructor(private stakeholderService: StakeholderService) {}

    ngOnInit(): void {
      this.stakeholderService.getAllUniqueStreetAddresses(1).subscribe((addresses: string[]) => {
        console.log(addresses);
        this.streetAddresses = addresses;
      });
    }

}
