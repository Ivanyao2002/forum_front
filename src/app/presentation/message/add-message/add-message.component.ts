import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-add-message',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './add-message.component.html',
  styleUrl: './add-message.component.css'
})
export class AddMessageComponent {
  messageForm!: FormGroup;


  ngOnInit(): void {
    this.messageForm = new FormGroup({
      content: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      topic: new FormControl('', [Validators.required, Validators.minLength(10)]),
    });

  }
  submit() {
    console.log(this.messageForm.value)
  }

  isInvalid(field: AbstractControl) {
    return field.invalid && (field.touched || field.dirty);
  }
}
