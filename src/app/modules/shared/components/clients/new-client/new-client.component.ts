import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss'],
})
export class NewClientComponent implements OnInit {

  @Input() class: string = "h-50vh"
  canal: "distancia" | "tienda" = "tienda"
  departamentos = [{ cod: "AT", name: "Atlántico" }, { cod: "AN", name: "ANTIOQUIA" }]
  ciudades = [{ cod_dept: "AT", cod_ciu: "BA", name: "Barranquilla" }, { cod_dept: "AT", cod_ciu: "SO", name: "SOLEDAD" }, { cod_dept: "AN", cod_ciu: "ME", name: "MedeLLIN" }]
  agencias = [{ cod: "01", name: "CENTRO", cod_dept: "AT", cod_ciu: "BA" }]
  selectedCities = []
  selectedDept
  selectedCity
  constructor(private modalController: ModalController, private notificationService: NotificationService) { }

  ngOnInit() { }

  onBack = (e: Event) => {
    this.modalController.dismiss()
  }

  async loadCities() {
    //this.ciudades = await this.generalsService().getCiudades(selectedDept)
    this.selectedCities = this.ciudades.filter(item => item.cod_dept == this.selectedDept)
  }
}
