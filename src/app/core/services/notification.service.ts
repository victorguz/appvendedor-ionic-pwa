import { Injectable } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { ComponentRef, ToastOptions } from '@ionic/core';
import { ModalComponent } from 'src/app/modules/shared/components/modal/modal.component';
import { environment } from 'src/environments/environment';
import { ToastButton } from '@ionic/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    public modalController: ModalController,
    public toastController: ToastController,
  ) { }

  async bottomSheet(component: ComponentRef, componentProps: any = {}) {
    const modal = await this.modal(component, componentProps, 'bottom-modal')
    return await modal.present();
  }

  async modal(component: ComponentRef, componentProps: any = {}, cssClass: string = "center-modal") {
    let modal = await this.modalController.getTop()
    if (modal) { modal.dismiss() }
    modal = await this.modalController.create({
      component,
      cssClass,
      swipeToClose: true,
      componentProps,
    });
    return modal
  }

  async centerModal(component: ComponentRef, componentProps: any = {}) {
    const modal = await this.modal(component, componentProps)
    return await modal.present();
  }

  async errorModal(message: string, title: string = "¡Error!") {
    const modal = await this.modal(ModalComponent, { message, title, color: "danger" })
    return await modal.present();
  }

  async warningModal(message: string, title: string = "¡Advertencia!") {
    const modal = await this.modal(ModalComponent, { message, title, color: "warning" })
    return await modal.present();
  }

  async infoModal(message: string, title: string = "¡Información!") {
    const modal = await this.modal(ModalComponent, { message, title, color: "info" })
    return await modal.present();
  }

  async toast(toastOptions: ToastOptions = {
    message: "Saludos!",
    position: 'bottom',
    duration: environment.MESSAGES_DURATION,
    buttons: [
      {
        text: 'Done',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  }) {

    let toast = await this.toastController.getTop()
    if (toast) { toast.dismiss() }
    toast = await this.toastController.create(toastOptions);
    return toast
  }

  async successToast(message: string, buttonName: string = "OK", onAction: () => any = () => { }) {
    const toast = await this.toast({
      message,
      position: 'bottom',
      duration: environment.MESSAGES_DURATION,
      color: "success",
      buttons: [
        {
          side: 'start',
          icon: "checkmark-circle-outline",
        },
        {
          text: buttonName,
          role: 'action',
          handler: () => {
            onAction()
          }
        }
      ]
    })
    await toast.present();
    const { role } = await toast.onDidDismiss();
    return role
  }

  async errorToast(message: string, buttonName: string = "OK", onAction: () => any = () => { }) {
    const toast = await this.toast({
      message,
      position: 'bottom',
      duration: environment.MESSAGES_DURATION,
      color: "danger",
      buttons: [
        {
          side: 'start',
          icon: "bug-outline",
        },
        {
          text: buttonName,
          role: 'action',
          handler: () => {
            onAction()
          }
        }
      ]
    })
    await toast.present();
    const { role } = await toast.onDidDismiss();
    return role
  }

  async deletionToast(message: string, buttonName: string = "OK", onAction: () => any = () => { }) {
    const toast = await this.toast({
      message,
      position: 'bottom',
      duration: environment.MESSAGES_DURATION,
      color: "danger",
      buttons: [
        {
          side: 'start',
          icon: "trash-outline",
        },
        {
          text: buttonName,
          role: 'action',
          handler: () => {
            onAction()
          }
        }
      ]
    })
    await toast.present();
    const { role } = await toast.onDidDismiss();
    return role
  }

  async warningToast(message: string, buttonName: string = "OK", onAction: () => any = () => { }) {
    const toast = await this.toast({
      message,
      position: 'bottom',
      duration: environment.MESSAGES_DURATION,
      color: "warning",
      buttons: [
        {
          side: 'start',
          icon: "warning-outline",
        },
        {
          text: buttonName,
          role: 'action',
          handler: () => {
            onAction()
          }
        }
      ]
    })
    await toast.present();
    const { role } = await toast.onDidDismiss();
    return role
  }

  async infoToast(message: string, buttonName: string = "OK", onAction: () => any = () => { }) {
    const toast = await this.toast({
      message,
      position: 'bottom',
      duration: environment.MESSAGES_DURATION,
      color: "info",
      buttons: [
        {
          side: 'start',
          icon: "information-circle-outline",
        },
        {
          text: buttonName,
          role: 'action',
          handler: () => {
            onAction()
          }
        }
      ]
    })
    await toast.present();
    const { role } = await toast.onDidDismiss();
    return role
  }
}


