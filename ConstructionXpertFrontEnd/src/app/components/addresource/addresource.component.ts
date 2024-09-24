import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ResourceType} from "../../enums/resource-type";
import {ResourceService} from "../../Services/resource.service";
import {Resource} from "../../entities/resource";

@Component({
  selector: 'app-addresource',
  standalone: true,
  imports: [],
  templateUrl: './addresource.component.html',
  styleUrl: './addresource.component.css'
})
export class AddresourceComponent {
  resourceForm: FormGroup;
  resourceTypes = Object.values(ResourceType);

  constructor(private resourceService: ResourceService, private fb: FormBuilder) {
    this.resourceForm = this.fb.group({
      name: ['', Validators.required],
      quantity: [1, Validators.required],
      type: ['', Validators.required],
      provider: ['', Validators.required],
      taskId: [null, Validators.required]
    });
  }

  onSubmit(): void {
    if (this.resourceForm.valid) {
      const resource: Resource = this.resourceForm.value;
      this.resourceService.createResource(resource).subscribe({
        next: (createdResource) => {
          console.log('Resource created:', createdResource);
          this.resourceForm.reset();
        },
        error: (error) => {
          console.error('Error creating resource:', error);
        },
      });
    }
  }

}
