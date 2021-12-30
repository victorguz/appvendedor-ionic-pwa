import { Component, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { secureStorage } from 'src/app/core/secure.config';
import { getConfig, getConnection, hideSpinner, setOnLocal, showSpinner } from 'src/app/core/services/functions.service';
import { HelpersService } from 'src/app/core/services/helpers.service';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  animations: [
  ]
})
export class LoginPage {
  public loading: boolean = false;
  public TITLE = "Iniciar sesión";
  public form: FormGroup
  public c_emp = "JA"
  constructor(private helpers: HelpersService,
    private activeRoute: ActivatedRoute, private formBuilder: FormBuilder,
    private authService: AuthService, private router: Router) {
    this.c_emp = getConnection()
    this.form = this.formBuilder.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required]],
      c_emp: [this.c_emp ? this.c_emp : "JA", [Validators.required]],
    });
    if (this.authService.isAuthenticated()) {
      this.router.navigate([getConfig("route_on_login")])
    }
    const data = this.activeRoute.snapshot.data
    if (data.title) {
      this.TITLE = data.title;
      this.helpers.setTitle(data.title);
    }
  }

  changeConnection(c_emp: string) {
    this.helpers.notification.infoToast("Seleccionó: " + (c_emp == "JA" ? "Colombia" : (c_emp == "JP" ? "Panamá" : (c_emp == "JC" ? "Costa Rica" : "Ninguno"))))
    setOnLocal(environment.LOCAL_CONNECTION, c_emp)
    this.form.value.c_emp = c_emp;
    this.c_emp = c_emp
  }

  async login(event: Event) {
    event.preventDefault()
    showSpinner()
    if (this.form.valid) {
      const response = await this.authService.verifyWithUsernameAndPassword(this.form.value)
      if (response.success) {
        const lastUrl = secureStorage.getItem(environment.LOCAL_LAST_URL)
        this.helpers.notification.successToast("Acceso autorizado")
        if (lastUrl) {
          location.href = lastUrl;
        } else {
          this.router.navigate([getConfig("route_on_login")])
        }
      } else {
        this.helpers.notification.errorToast(response.message)
      }
    } else {
      this.helpers.notification.warningToast("Digite un nombre de usuario y contraseña válidos")
    }
    hideSpinner()
  }
}