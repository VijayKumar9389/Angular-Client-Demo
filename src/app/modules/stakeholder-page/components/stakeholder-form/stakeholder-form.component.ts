import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {ReactiveFormsModule} from "@angular/forms";
import { Stakeholder} from "../../../../core/models/stakeholder.model";

@Component({
  selector: 'app-stakeholder-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './stakeholder-form.component.html',
  styleUrl: './stakeholder-form.component.scss'
})

export class StakeholderFormComponent implements OnInit {
  @Input() stakeholder: Stakeholder | undefined;
  stakeholderForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Initialize the form with default values or stakeholder values
    this.stakeholderForm = this.fb.group({
      name: [this.stakeholder?.name],
      streetAddress: [this.stakeholder?.streetAddress],
      mailingAddress: [this.stakeholder?.mailingAddress],
      phoneNumber: [this.stakeholder?.phoneNumber],
      isPerson: [this.stakeholder?.isPerson],
      stakeholderComments: [this.stakeholder?.stakeholderComments],
      stakeholderStatus: [this.stakeholder?.stakeholderStatus],
      contacted: [this.stakeholder?.contacted],
      consultation: [this.stakeholder?.consultation],
      attempts: [this.stakeholder?.attempts],
      email: [this.stakeholder?.email],
      followUp: [this.stakeholder?.followUp],
    });
  }

  // Accessor for form controls
  get f() {
    return this.stakeholderForm.controls;
  }

  // Handle form submission
  onSubmit(): void {
    if (this.stakeholderForm.valid) {
      const formData = this.stakeholderForm.value;
      // Handle form submission (e.g., send data to the server)
      console.log('Form submitted with data:', formData);
    }
  }
}
