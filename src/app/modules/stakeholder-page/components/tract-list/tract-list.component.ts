import { Component, Input } from '@angular/core';
import {TractRecord} from "../../../../core/models/tract-record.model";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-tract-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tract-list.component.html',
  styleUrl: './tract-list.component.css'
})

export class TractListComponent {
  @Input() tractRecords!: TractRecord[];
}
