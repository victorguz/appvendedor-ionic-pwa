import { Component } from '@angular/core';
import { arrayNotEmpty, isEmpty, isNotEmpty } from 'class-validator';
import { environment } from 'src/environments/environment';
import { getConfig, getErrorMessage, getFromLocal, setOnLocal } from '../core/services/functions.service';
import { GeneralsService } from '../core/services/generals.service';
import { HelpersService } from '../core/services/helpers.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private _helpers: HelpersService, private generalsService: GeneralsService) {
    this._helpers.setTitle();
    this.setInitialStyles();
    console.info(environment.environment.toUpperCase())
  }

  async ngOnInit() {
    await this.getInicialData()
  }

  private async getInicialData() {
    try {
      //Establecer conexión por defecto
      if (isEmpty(getFromLocal(environment.LOCAL_CONNECTION))) {
        setOnLocal(environment.LOCAL_CONNECTION, "JA")
      } else {
        //Obtener endpoints
        await this.generalsService.getEndpoints()
        //Obtener generals
        await this.generalsService.getGeneralsJSON()
        //Obtener modulos (si ya inició sesión)
      }
    } catch (error) {
      const message = getErrorMessage(error)
      this._helpers.notification.errorToast(message)
    }
  }
  
  private setInitialStyles() {
    const properties: { name: string, value: string }[] = getConfig("css_style_properties")
    properties.forEach(prop => {
      document.documentElement.style.setProperty(`--${prop.name.replaceAll("_", "-")}`, prop.value)
    });
  }
}
