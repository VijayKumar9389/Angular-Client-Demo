import { Component, Input } from '@angular/core';
import {TractRecord} from "../../../../core/models/tract-record.model";
import {CommonModule} from "@angular/common";
import {TractItemComponent} from "../tract-item/tract-item.component";

@Component({
  selector: 'app-tract-list',
  standalone: true,
  imports: [CommonModule, TractItemComponent],
  templateUrl: './tract-list.component.html',
  styleUrl: './tract-list.component.scss'
})

export class TractListComponent {
  @Input() tractRecords!: TractRecord[];
}
