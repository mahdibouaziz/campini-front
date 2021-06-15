import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginGuard } from './guards/login.guard';
import { LogoutGuard } from './guards/logout.guard';
import { HomeComponent } from './home/home.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { ProfileComponent } from './profile/profile/profile.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [LogoutGuard] },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [LogoutGuard],
  },
  { path: 'profile', component: ProfileComponent, canActivate: [LoginGuard] },
  {
    path: 'editProfile',
    component: EditProfileComponent,
    canActivate: [LoginGuard],
  },
  { path: 'events', component: ProfileComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
