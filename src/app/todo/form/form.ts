import { Component, EventEmitter, inject, Output, output } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  imports: [ReactiveFormsModule, InputTextModule, ButtonModule, MessageModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class TodoForm {
    @Output() postCreated = new EventEmitter< { name: string; description: string } >();
    todoForm: FormGroup;

    formSubmitted = false;

    constructor(private fb: FormBuilder) {
        this.todoForm = this.fb.group({
            name: ['', Validators.required],
            description: ['', Validators.required],
        });
    }

    onSubmit() {
        this.formSubmitted = true;
        if (this.todoForm.invalid) {
            return;
        }
        this.postCreated.emit(this.todoForm.value);
    }

    isInvalid(controlName: string) {
        const control = this.todoForm.get(controlName);
        return control?.invalid && (control.touched || this.formSubmitted);
    }
}
