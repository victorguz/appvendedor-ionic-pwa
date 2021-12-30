import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent extends MenuController {

  options = [
    { icon: "person", color: "primary", name: "perfil" },
    { icon: "stats-chart", color: "primary", name: "Resumen" },
    { icon: "bag-handle", color: "primary", name: "Ofertas" },
    { icon: "settings", color: "primary", name: "Configuracion" },
    { icon: "heart", color: "primary", name: "Ayuda" },
  ]


  logOut() {
    alert("Cerrando sesión")
  }

}
