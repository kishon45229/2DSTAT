import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },  // Homepage as the default route
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', redirectTo: '' }
];