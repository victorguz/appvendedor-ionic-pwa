import { Component, Input, OnInit } from '@angular/core';
import { ModalController, MenuController } from '@ionic/angular';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ClientsPage } from '../clients/clients.page';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {


  @Input() title: string = ""
  @Input() menu: boolean = true
  @Input() notifications: boolean = true
  @Input() back: boolean = false
  @Input() add: boolean = false

  @Input() onAdd: (e: Event) => any
  @Input() onBack: (e: Event) => any

  client = {
    name: "Cliente 1"
  }

  constructor(private modalController: ModalController, private menuController: MenuController, private notificationService: NotificationService) {
  }

  async ngOnInit() {
    console.log(this.back)
  }

  async openClientsModal() {
    this.notificationService.bottomSheet(ClientsPage, {
      'isModal': true,
      'class': "h-50vh"
    })
  }


  openMenu(e: Event) {
    e.preventDefault()
    this.menuController.enable(true, "option-menu")
    this.menuController.swipeGesture(true, "option-menu")
    this.menuController.open()
  }

  openNotifications(e: Event) { }

  async goBack(e: Event) {
    if (this.onBack != undefined) { this.onBack(e) } else { history.back }

  }

}
