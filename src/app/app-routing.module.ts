import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminPage } from './modules/admin/layout/admin.page';
import { AuthPage } from './modules/auth/layout/auth.page';
import { AuthGuardService } from './modules/auth/services/auth-guard.service';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthPage,
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthPageModule)
  },
  {
    path: 'admin',
    component: AdminPage,
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminPageModule),
    canActivate: [AuthGuardService]
  },
  // { path: '', redirectTo: '/auth/login', pathMatch: "prefix" },
  { path: "**", redirectTo: "admin", pathMatch: "full" }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
