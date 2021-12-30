import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Platform } from '@ionic/angular';
import { getConfig, toTitleCase } from './functions.service';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  constructor(
    private _title: Title,
    public platform: Platform,
    public notification: NotificationService,
  ) { }

  isIOS() {
    return this.platform.is("ios")
  }
  
  /**
     * Set a new page meta title
     * @param title The new title
     * @param stringCase Case to transform
     */
  public setTitle(title: string = "") {
    title = title.trim();
    if (title.length > 0) {
      this._title.setTitle(toTitleCase(`${title} | ${getConfig("app_title")}`))
    } else {
      this._title.setTitle(toTitleCase(`${getConfig("app_title")}`))
    }
    //Ponemos el titulo en el navbar de inmediato
    const navbarTitle = document.getElementById("coky-navbar-title")
    navbarTitle ? navbarTitle.innerHTML = title : ""
    //Y lo volvemos a poner por si no se habia cargado el componente
    setTimeout(() => {
      const navbarTitle = document.getElementById("coky-navbar-title")
      navbarTitle ? navbarTitle.innerHTML = title : ""
    }, 500);
  }

  /**
   * Current title
   * @returns current title
   */
  public getTitle(): string {
    return this._title.getTitle()
  }

}
