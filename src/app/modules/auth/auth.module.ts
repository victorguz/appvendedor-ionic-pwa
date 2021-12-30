import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthPageRoutingModule } from './auth-routing.module';
import { AuthPage } from './layout/auth.page';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { LoginPage } from './pages/login/login.page';
import { SplashPage } from './pages/splash/splash.page';
import { RegisterPage } from './pages/register/register.page';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthPageRoutingModule,
    SharedModule,
  ],
  declarations: [AuthPage, LoginPage, SplashPage, RegisterPage],
  providers: [JwtHelperService]
})
export class AuthPageModule { }
