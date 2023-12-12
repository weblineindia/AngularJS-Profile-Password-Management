import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NotFoundComponent } from './common-components/not-found/not-found.component';

const routes: Routes = [
  {
    path : 'change-password',
    loadChildren : () => import('./pages/change-password/change-password.module').then(m => m.ChangePasswordModule),
    canActivate : [AuthGuard]
  },
  {
    path : 'profile',
    loadChildren : () => import('./pages/profile/profile.module').then(m => m.ProfileModule),
    canActivate : [AuthGuard]
  },
  {
    path : '',
    redirectTo : 'profile',
    pathMatch: 'full'
  },
  {
    path : '**',
    component : NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
