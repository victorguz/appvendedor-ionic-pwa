import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BasicResponse } from 'src/app/core/models/basic-response.model';
import { secureStorage } from 'src/app/core/secure.config';
import { removeFromLocal, getConnection, getCurrentUser, getFromLocal, hideSpinner, setOnLocal, showSpinner, getApiKey } from 'src/app/core/services/functions.service';
import { HelpersService } from 'src/app/core/services/helpers.service';
import { RequestsService } from 'src/app/core/services/requests.service';
import { environment } from 'src/environments/environment';
import { AuthByUsernameDto, UsuarioAuth } from '../models/auth.models';
import { JwtHelperService } from '@auth0/angular-jwt';


/**
 * AuthService
 * @author Victorguz <victorguzber@gmail.com> June-2021
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private jwtHelper: JwtHelperService,
    private requestsService: RequestsService,
    private router: Router) { }

  /**
   * Check if the user is authenticated
   * @returns true or false - if the user is authenticated
   */
  public isAuthenticated(): boolean {
    const token = this.getToken()
    return token ? !this.jwtHelper.isTokenExpired(token) : false;
  }

  /**
   * Verify user by username and password
   * @param data json with username and password
   * @returns user
   */
  async verifyWithUsernameAndPassword(data: AuthByUsernameDto): Promise<BasicResponse> {
    const response = await this.requestsService.makeRequest(environment.domainBasics.replace("{{c_emp}}", getConnection()), environment.urls.auth.login, {
      api_key: getApiKey(), ...data
    })
    if (response.success) {
      if (response.success && response.data.token) {
        const token = this.jwtHelper.decodeToken(response.data.token)
        if (token.jamaradmin_key == environment.jamaradmin_key) {
          this.saveToken(response.data.token)
          this.saveUser(token.data)
          return response
        } else {
          return new BasicResponse(false, "El token obtenido es corrupto");
        }
      }
    } else {
      return new BasicResponse(false, response.message);
    }
    return new BasicResponse(false, "No se pudo iniciar la sesión");
  }

  async register(usuario: UsuarioAuth): Promise<BasicResponse> {
    const response = await this.requestsService.makeRequest(environment.domainBasics.replace("{{c_emp}}", getConnection()), environment.urls.auth.register, {
      c_emp: getConnection(), api_key: getApiKey(), usuario_creacion: getCurrentUser().usuario_aplicativo, ...usuario
    })
    return response
  }

  async modify(usuario: UsuarioAuth): Promise<BasicResponse> {
    const response = await this.requestsService.makeRequest(environment.domainBasics.replace("{{c_emp}}", getConnection()), environment.urls.auth.modify, {
      c_emp: getConnection(), api_key: getApiKey(), usuario_modificacion: getCurrentUser().usuario_aplicativo, ...usuario
    })
    return response
  }

  private saveUser(user: any) {
    setOnLocal(environment.COOKIE_USER, new UsuarioAuth(user))
  }

  private getToken() {
    return getFromLocal(environment.COOKIE_TOKEN)
  }

  private saveToken(token: string) {
    setOnLocal(environment.COOKIE_TOKEN, token)
  }

  /**
   * Cierra la sesión del usuario y borra su caché almacenado
   */
  public logOut() {
    showSpinner()
    localStorage.clear()
    setOnLocal(environment.LOCAL_CONNECTION, 'JA')
    this.router.navigate(["/auth/login"])
    hideSpinner()
  }
}

