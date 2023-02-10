import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm: FormGroup; // initialize my form key or handler
  constructor() {
    this.registerForm = new FormGroup({
      // inside this form key or wrapper that holds the form data or values get the following inputs
      userName: new FormControl('', [
        // formControl initializes the initial value of the input and inside [] we put the required things
        Validators.required, // Validators is an build in module or object that holds the validation words or methods
        Validators.pattern(/^[-\w\.\$@\*\!]{1,30}$/)
      ]),
      email: new FormControl('', [
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"), // to validate that the email is  written correctly
        Validators.required, // to validate that the user MUST write an email in this field
      ]),
      password: new FormControl('', [
        Validators.pattern(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/
        ),
        Validators.required,
      ]),
     
      confirmPassword: new FormControl('', [Validators.required]),
      name: new FormControl('',
      Validators.required)
    });
  }
  Register(){
    console.log(this.registerForm);
  }
}

