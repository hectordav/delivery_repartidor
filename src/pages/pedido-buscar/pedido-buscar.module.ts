import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PedidoBuscarPage } from './pedido-buscar';

@NgModule({
  declarations: [
    PedidoBuscarPage,
  ],
  imports: [
    IonicPageModule.forChild(PedidoBuscarPage),
  ],
})
export class PedidoBuscarPageModule {}
