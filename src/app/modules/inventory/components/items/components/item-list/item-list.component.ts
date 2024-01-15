import { Component, OnInit } from '@angular/core';
import { ItemDTO } from '../../../../../../core/models/item.model';
import { ItemService } from '../../../../../../core/services/item.service';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  providers: [ItemService],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})

export class ItemListComponent implements OnInit {
  projectId: number = 1; // Replace with the actual project ID
  items: ItemDTO[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.fetchItems();
  }

  fetchItems(): void {
    this.itemService.getItems(this.projectId).subscribe(
      (items: ItemDTO[]) => {
        this.items = items;
        console.log(this.items);
        console.log('Items fetched successfully:', items);
      },
      (error) => {
        console.error('Error fetching items:', error);
        // Handle the error as needed (e.g., show a user-friendly message)
      }
    );
  }

}
