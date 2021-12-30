import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ClientsPage } from './components/clients/clients.page';
import { ModalComponent } from './components/modal/modal.component';
import { KiloFormaterPipe } from 'src/app/core/pipes/kilo-formater.pipe';
import { ProductComponent } from './components/product/product.component';
import { MenuComponent } from './components/menu/menu.component';
import { NewClientComponent } from './components/clients/new-client/new-client.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ClientsPage,
    ModalComponent,
    KiloFormaterPipe,
    ProductComponent,
    MenuComponent,
    NewClientComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,
    ClientsPage,
    ModalComponent,
    KiloFormaterPipe,
    ProductComponent,
    MenuComponent,
    NewClientComponent,
  ],
  providers: []
})
export class SharedModule { }
