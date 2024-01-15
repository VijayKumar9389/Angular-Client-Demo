import {Component, Input, OnInit} from '@angular/core';
import {ItemService} from "../../../../../../core/services/item.service";
import {PackageTypeDTO} from "../../../../../../core/models/delivery.model";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-packageitem-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  providers: [ItemService],
  templateUrl: './packageitem-list.component.html',
  styleUrl: './packageitem-list.component.css'
})
export class PackageitemListComponent implements OnInit {
  @Input() packageType: PackageTypeDTO = {} as PackageTypeDTO;


  constructor() {
  }

  ngOnInit(): void {
    console.log(this.packageType)
  }




}
