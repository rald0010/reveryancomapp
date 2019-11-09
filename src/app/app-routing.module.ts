import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { UsersComponent } from './components/users/users.component';
// Import all the components for which navigation service has to be activated
import { SignInComponent } from '../app/components/sign-in/sign-in.component';
import { SignUpComponent } from '../app/components/sign-up/sign-up.component';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from '../app/components/forgot-password/forgot-password.component';
import { AncompageComponent } from '../app/components/ancompage/ancompage.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { SecureInnerPagesGuard } from './shared/guard/secure-inner-pages.guard.ts.guard';

import { VerifyEmailComponent } from '../app/components/verify-email/verify-email.component';


const routes: Routes = [
  {path: 'user', component: UsersComponent},
  {path: 'ancom', component: AncompageComponent},
  {path: 'admin', component: AdminComponent},
  { path: '', redirectTo: '/ancom', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'register-user', component: SignUpComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard] }
];


@NgModule({
  exports: [RouterModule],
  imports: [

    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
