import {Component, Input, OnInit} from '@angular/core';
import {ItemService} from "../../../../../../core/services/item.service";
import {ItemDTO} from "../../../../../../core/models/item.model";
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-create-packageitem-form',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    NgIf
  ],
  providers: [ItemService],
  templateUrl: './create-packageitem-form.component.html',
  styleUrl: './create-packageitem-form.component.scss'
})

export class CreatePackageitemFormComponent implements OnInit{
  @Input() packageTypeId: number = 0;
  items: ItemDTO[] = [];
  selectedItemId: number = 0;

  constructor(private itemService: ItemService) {

  }

  //get items
  ngOnInit(): void {
    this.itemService.getItems(1).subscribe(
      (res) => {
        this.items = res;
        console.log('Items:', this.items);
      }
    );
  }

  onsubmit(): void {
    const numericItemId: number = +this.selectedItemId; // Convert string to number
    this.itemService.createPackageItem(numericItemId, this.packageTypeId, "test").subscribe(
      (res): void => {
        console.log(res);
      }
    );
  }


  protected readonly ondblclick = ondblclick;
}
