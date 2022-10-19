import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      date: new FormControl(null, [Validators.required]),
      placeOfBirth: new FormControl(null)
    })
  }

  get nameFormControl(): FormControl {
    return this.form.get('name') as FormControl
  }

  get nameIsRequired(): boolean {
    return !!this.form.get('name')?.hasValidator(Validators.required)
  }

  get nameIsValid(): boolean {
    const control = this.form.get('name')
    return !!control?.valid
  }

  get nameErrors(): string[] {
    const errors = this.form.get('name')?.errors;
    return errors ? Object.keys(errors) : []
  }

  get dateFormControl(): FormControl {
    return this.form.get('date') as FormControl
  }

  get dateIsRequired(): boolean {
    return !!this.form.get('date')?.hasValidator(Validators.required)
  }

  get dateIsValid(): boolean {
    const control = this.form.get('date')
    return !!control?.valid
  }

  get dateErrors(): string[] {
    const errors = this.form.get('date')?.errors;
    return errors ? Object.keys(errors) : []
  }

  get placeOfBirthFormControl(): FormControl {
    return this.form.get('placeOfBirth') as FormControl
  }

  get placeOfBirthErrors(): string[] {
    const errors = this.form.get('date')?.errors;
    return errors ? Object.keys(errors) : []
  }

  onSubmit(): void {
    console.log('Submit Form:',
      { valid: this.form.valid }, {
      name: this.form.get('name'),
      birthday: this.form.get('birthday'),
      placeOfBirth: this.form.get('placeOfBirth')
    })
  }
}
