import { Component, Input, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { showSpinner } from 'src/app/core/services/functions.service';
import { HelpersService } from 'src/app/core/services/helpers.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { NewClientComponent } from './new-client/new-client.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
})
export class ClientsPage implements OnInit {

  @Input() isModal: boolean = false
  @Input() class: string = "h-50vh"

  types: string[] = ["clientes", "cotizaciones", "visor", "crédito", "contado", "recuperacion", "evidente", "calificar"]
  type: string = "clientes";
  clients: any[] = [
    {
      name: "Andrés Pérez",
      cedula: 1234092725,
      cuotas: [6, 12, 18],
      products: [
        {
          id: 1,
          name: "Producto 1",
          precio: 300,
          oferta: 250,
          cantidad: 4
        },
        {
          id: 2,
          name: "Producto 2",
          precio: 300,
          oferta: 250,
          cantidad: 4
        },
        {
          id: 3,
          name: "Producto 3",
          precio: 300,
          oferta: 250,
          cantidad: 4
        },
        {
          id: 4,
          name: "Producto 4",
          precio: 300,
          oferta: 250,
          cantidad: 4
        }
      ]
    },
    {
      name: "Cliente 2",
      cedula: 1234092725,
      cuotas: [6, 12, 18],
      products: [
        {
          id: 1,
          name: "Producto 1",
          precio: 300,
          oferta: 250,
          cantidad: 4
        },
        {
          id: 3,
          name: "Producto 3",
          precio: 300,
          oferta: 250,
          cantidad: 4
        },

      ]
    },
    {
      name: "Octavio Guzmán",
      cedula: 1234092725,
      cuotas: [6, 12, 18],
      products: [
        {
          id: 1,
          name: "Producto 1",
          precio: 300,
          oferta: 250,
          cantidad: 4
        },

        {
          id: 4,
          name: "Producto 4",
          precio: 300,
          oferta: 250,
          cantidad: 4
        }
      ]
    },
    {
      name: "Cliente 4",
      cedula: 1234092725,
      cuotas: [6, 12, 18],
      products: [
        {
          id: 2,
          name: "Producto 2",
          precio: 300,
          oferta: 250,
          cantidad: 4
        },
        {
          id: 3,
          name: "Producto 3",
          precio: 300,
          oferta: 250,
          cantidad: 4
        },
        {
          id: 4,
          name: "Producto 4",
          precio: 300,
          oferta: 250,
          cantidad: 4
        }
      ]
    },
    {
      name: "Cliente 5",
      cedula: 1234092725,
      cuotas: [6, 12, 18],
      products: []
    }
  ]

  constructor(private modalController: ModalController, private notificationService: NotificationService) { }

  ngOnInit() {
    // console.log(this.isModal)
  }

  onAdd = (e: Event) => {
    this.notificationService.bottomSheet(NewClientComponent, {
      'isModal': true,
      'class': "h-50vh"
    })
  }

  onBack = (e: Event) => {
    this.modalController.dismiss()
  }

  setType(type: string) {
    this.type = type
    //Aquí va la carga de clientes
  }

  sumarPrecio(products) {
    let suma = 0
    products.forEach((val) => suma += val.precio)
    return "$" + (suma * 1150).toLocaleString()
  }

  sumarOferta(products) {
    let suma = 0
    products.forEach((val) => suma += val.oferta)
    return "$" + (suma * 1150).toLocaleString()
  }

  onSlideClient(event) {
    const ratio = event.detail.ratio
    console.log(event)
    // showSpinner()
    switch (this.type) {
      case "clientes":
        if (ratio == 1) {
          this.notificationService.successToast("Cotizando -> Eliminar de la lista -> Ver cotizacion -> Compartir PDF")
        } else if (ratio == -1) {
          this.notificationService.deletionToast("Cliente eliminado de la lista", "Deshacer", () => { this.notificationService.infoToast("Recuperado") })
        }
        break;
      case "cotizaciones":
        if (ratio == 1) {
          this.notificationService.successToast("Transformando a OP")
        } else if (ratio == -1) {
          this.notificationService.deletionToast("Esto no se puede eliminar", "OK", () => { this.notificationService.infoToast("Recuperado") })
        }
        break;
      case "visor":
        if (ratio == 1) {
          this.notificationService.successToast("Cotizando y transformando a OP")
        } else if (ratio == -1) {
          this.notificationService.deletionToast("Esto no se puede eliminar", "OK", () => { this.notificationService.infoToast("Recuperado") })
        }
        break;
      case "crédito":
        if (ratio == 1) {
          this.notificationService.successToast("Credito")
        } else if (ratio == -1) {
          this.notificationService.deletionToast("Delete", "Deshacer", () => { this.notificationService.infoToast("Recuperado") })
        }
        break;
      case "contado":
        if (ratio == 1) {
          this.notificationService.successToast("Visor")
        } else if (ratio == -1) {
          this.notificationService.deletionToast("Delete", "Deshacer", () => { this.notificationService.infoToast("Recuperado") })
        }
        break;
      case "recuperacion":
        if (ratio == 1) {
          this.notificationService.successToast("Visor")
        } else if (ratio == -1) {
          this.notificationService.deletionToast("Delete", "Deshacer", () => { this.notificationService.infoToast("Recuperado") })
        }
        break;
      case "evidente":
        if (ratio == 1) {
          this.notificationService.successToast("Visor")
        } else if (ratio == -1) {
          this.notificationService.deletionToast("Delete", "Deshacer", () => { this.notificationService.infoToast("Recuperado") })
        }
        break;
      case "calificar":
        if (ratio == 1) {
          this.notificationService.successToast("Visor")
        } else if (ratio == -1) {
          this.notificationService.deletionToast("Delete", "Deshacer", () => { this.notificationService.infoToast("Recuperado") })
        }
        break;
      default:
        throw new Error("Opción no registrada");
    }

  }


}
