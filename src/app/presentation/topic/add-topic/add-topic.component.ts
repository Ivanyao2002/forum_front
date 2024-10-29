import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-add-topic',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './add-topic.component.html',
  styleUrl: './add-topic.component.css'
})
export class AddTopicComponent implements OnInit {
  topicForm!: FormGroup;

  ngOnInit(): void {
    this.topicForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      forum: new FormControl('', [Validators.required, Validators.minLength(10)]),
    });

  }

  submit() {
    console.log(this.topicForm.value)
  }

  isInvalid(field: AbstractControl) {
    return field.invalid && (field.touched || field.dirty);
  }
}
