import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {ItemService} from "../../../../../../core/services/item.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-create-item-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  providers: [ItemService],
  templateUrl: './create-item-form.component.html',
  styleUrl: './create-item-form.component.scss'
})

export class CreateItemFormComponent {
  createItemForm: FormGroup;
  isLoading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private itemService: ItemService
  ) {
    this.createItemForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      image: [null, Validators.required],
      projectId: [1, Validators.required]
    });
  }

  handleImageChange(event: any): void {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      this.createItemForm.patchValue({
        image: file
      });
      this.createItemForm.get('image')?.updateValueAndValidity();
    }
  }

  onSubmit(): void {
    if (this.createItemForm.valid) {
      const formData = new FormData();
      const itemData = this.createItemForm.value;

      // Append form data
      formData.append('name', itemData.name);
      formData.append('description', itemData.description);
      formData.append('quantity', itemData.quantity.toString());
      formData.append('projectId', itemData.projectId.toString());
      if (itemData.image instanceof File) {
        formData.append('image', itemData.image, itemData.image.name);
      }

      // Show loading indicator
      this.isLoading = true;

      this.itemService.createItem(formData).subscribe(
        (createdItem) => {
          console.log('Item created:', createdItem);

          // Optionally, reset the form state here
          this.createItemForm.reset();
        },
        (error) => {
          console.error('Error creating item:', error);
        }
      ).add(() => {
        // Hide loading indicator
        this.isLoading = false;
      });
    }
  }
}
