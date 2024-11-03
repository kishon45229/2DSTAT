import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupSupermarketComponent } from './signup-supermarket/signup-supermarket.component';
import { SignupManufacturerComponent } from './signup-manufacturer/signup-manufacturer.component';
import { LoginSupermarketComponent } from './login-supermarket/login-supermarket.component';
import { LoginManufacturerComponent } from './login-manufacturer/login-manufacturer.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },  // Homepage as the default route
  { path: 'login-supermarket', component: LoginSupermarketComponent },
  { path: 'login-manufacturer', component: LoginManufacturerComponent },
  { path: 'signup-supermarket', component: SignupSupermarketComponent },
  { path: 'signup-manufacturer', component: SignupManufacturerComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: '' }
];