import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ReactiveFormsModule} from "@angular/forms";
import {Stakeholder, StakeholderUpdateDTO} from "../../../../core/models/stakeholder.model";
import {CommonModule} from "@angular/common";
import {StakeholderService} from "../../../../core/services/stakeholder.service";

@Component({
  selector: 'app-stakeholder-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  providers: [StakeholderService],
  templateUrl: './stakeholder-form.component.html',
  styleUrl: './stakeholder-form.component.scss'
})

export class StakeholderFormComponent implements OnInit {

  @Input() stakeholder: Stakeholder | undefined;
  stakeholderForm!: FormGroup;

  constructor(private fb: FormBuilder, private stakeholderService: StakeholderService) {
  }

  ngOnInit(): void {
    // Initialize the form with default values or stakeholder values
    this.stakeholderForm = this.fb.group({
      name: [this.stakeholder?.name],
      streetAddress: [this.stakeholder?.streetAddress],
      mailingAddress: [this.stakeholder?.mailingAddress],
      phoneNumber: [this.stakeholder?.phoneNumber],
      isPerson: [(this.stakeholder?.isPerson === 'YES') ? 'YES' : 'NO'],
      stakeholderComments: [this.stakeholder?.stakeholderComments],
      stakeholderStatus: [this.stakeholder?.stakeholderStatus],
      contacted: [(this.stakeholder?.contacted === 'YES') ? 'YES' : 'NO'],
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

  // Add a date to the attempts field
  addAttempt(): void {
    let date: Date = new Date();
    let today: string = date.getDate() + "/" + ('0' + (date.getMonth() + 1)).slice(-2) + "/" + date.getFullYear();

    let attemptTxt: FormControl<any> = this.stakeholderForm.get('attempts') as FormControl;

    if (attemptTxt.value !== '') {
      today = ", " + today;
    }

    attemptTxt.setValue(attemptTxt.value + today);
  }

  // Handle form submission
  stampDate(): void {
    let date: Date = new Date();
    let today: string = date.getDate() + "/" + ('0' + (date.getMonth() + 1)).slice(-2) + "/" + date.getFullYear();

    this.stakeholderForm.get('consultation')?.setValue(today);
  }

  // Handle form submission
  // onSubmit(): void {
  //   if (this.stakeholderForm.valid) {
  //     const formData = this.stakeholderForm.value;
  //     // Handle form submission (e.g., send data to the server)
  //     console.log('Form submitted with data:', formData);
  //   }
  // }

  // Handle form submission
  onSubmit(): void {
    if (this.stakeholderForm.valid) {
      const formData = this.stakeholderForm.value;

      // Get stakeholder id from the current stakeholder
      const stakeholderId = this.stakeholder?.id || 0;

      // Call the updateStakeholder method from the service and subscribe to the observable
      this.stakeholderService.updateStakeholder(stakeholderId, formData).subscribe(
        () => {
          // Handle success (e.g., show a success message, update UI)
          console.log('Stakeholder updated successfully');
        },
        (error) => {
          // Handle error (e.g., show an error message)
          console.error('Failed to update stakeholder:', error);
        }
      );
    }
  }
}
