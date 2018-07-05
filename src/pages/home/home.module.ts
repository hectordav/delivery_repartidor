import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import {MapUbicacionComponent} from '../../components/map-ubicacion/map-ubicacion';

@NgModule({
  declarations: [
    HomePage,
    MapUbicacionComponent
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
})
export class HomePageModule {}
