import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastButton } from '@ionic/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  @Input() title: string = ""
  @Input() message: string = "Lorem ipsum..."
  @Input() color: string = "success"
  @Input() buttons: ToastButton[] = []

  constructor(public modalController: ModalController) { }

  ngOnInit() { }

}

