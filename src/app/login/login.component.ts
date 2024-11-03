/*import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
*/

import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  router = inject(Router)
  authService = inject(AuthService)

  form = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  errorMessage: string | null = null;

  onSubmit(): void {
    const rawForm = this.form.getRawValue()
    this.authService
    .signin(rawForm.email, rawForm.password)
    .subscribe({
      next:() => {
        this.router.navigateByUrl('/dashboard');
        console.log('Successfully logged in!');
        alert("Successfully logged in!")
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
}
