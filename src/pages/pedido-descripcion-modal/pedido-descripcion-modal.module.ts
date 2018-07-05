import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PedidoDescripcionModalPage } from './pedido-descripcion-modal';

@NgModule({
  declarations: [
    PedidoDescripcionModalPage,
  ],
  imports: [
    IonicPageModule.forChild(PedidoDescripcionModalPage),
  ],
})
export class PedidoDescripcionModalPageModule {}
