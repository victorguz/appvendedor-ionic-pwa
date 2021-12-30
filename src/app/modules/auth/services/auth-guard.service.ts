import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { secureStorage } from 'src/app/core/secure.config';
import { environment } from 'src/environments/environment';

/**
 * AuthGuardService
 * @author Victorguz <victorguzber@gmail.com> June-2021
 */
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) { }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    const tokenAllowed = this.auth.isAuthenticated()
    // if (!tokenAllowed) {
    //   secureStorage.setItem(environment.LOCAL_LAST_URL, location.href)
    //   return false
    // }
    //Si el usuario no está logeado o no tiene modulos
    return true;
  }
}
