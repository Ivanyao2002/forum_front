import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-add-forum',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './add-forum.component.html',
  styleUrl: './add-forum.component.css'
})
export class AddForumComponent implements OnInit {
    forumForm!: FormGroup;


  ngOnInit(): void {
    this.forumForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      description: new FormControl('', [Validators.required, Validators.minLength(10)]),
    });

  }
    submit() {
      console.log(this.forumForm.value)
    }

    isInvalid(field: AbstractControl) {
      return field.invalid && (field.touched || field.dirty);
    }
}
