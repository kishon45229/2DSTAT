/*import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

}*/

import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, RouterOutlet],
  templateUrl: './signup-supermarket.component.html',
  styleUrls: ['./signup-supermarket.component.css']
})
export class SignupSupermarketComponent {
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  router = inject(Router);
  authService = inject(AuthService)

  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  });
  errorMessage: string | null = null;

  onSubmit(): void {
    const rawForm = this.form.getRawValue()
    this.authService
    .signup(rawForm.email, rawForm.username, rawForm.password)
    .subscribe({
      next:() => {
        this.router.navigateByUrl('/');
        console.log('Successfully registered!');
        alert("Successfully registered!")
      },
      error: (err) => {
        this.errorMessage = err.code;
        console.log(this.errorMessage);
      }
    });
  }

  togglePasswordVisibility() {
    const passwordField = document.getElementById('password') as HTMLInputElement;
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    const icon = document.querySelector('.toggle-password i');
    icon?.classList.toggle('fa-eye-slash');
  }

  toggleConfirmPasswordVisibility() {
    const confirmPasswordField = document.getElementById('confirm-password') as HTMLInputElement;
    const type = confirmPasswordField.getAttribute('type') === 'password' ? 'text' : 'password';
    confirmPasswordField.setAttribute('type', type);
    const icon = document.querySelector('.toggle-confirm-password i');
    icon?.classList.toggle('fa-eye-slash');
  }
}