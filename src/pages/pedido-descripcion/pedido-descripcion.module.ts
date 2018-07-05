import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PedidoDescripcionPage } from './pedido-descripcion';

@NgModule({
  declarations: [
    PedidoDescripcionPage,
  ],
  imports: [
    IonicPageModule.forChild(PedidoDescripcionPage),
  ],
})
export class PedidoDescripcionPageModule {}
