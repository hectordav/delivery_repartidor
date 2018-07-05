import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PedidosVerPage } from './pedidos-ver';

@NgModule({
  declarations: [
    PedidosVerPage,
  ],
  imports: [
    IonicPageModule.forChild(PedidosVerPage),
  ],
})
export class PedidosVerPageModule {}
