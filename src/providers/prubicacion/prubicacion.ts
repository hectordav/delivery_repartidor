import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PrrutasProvider } from '../../providers/prrutas/prrutas';

@Injectable()
export class PrubicacionProvider {
		principal_url:string;
  constructor(public http: HttpClient,public ruta:PrrutasProvider) {
    console.log('Hello PrubicacionProvider Provider');
    this.principal_url=this.ruta.get_ruta();
  }
  guardar_ubicacion(id_usuario, lat_lng){
    var variable_2=JSON.stringify({id_usuario:id_usuario, lat_lng:lat_lng});
  	var url = this.principal_url+'ubicacion/guardar_ubicacion';
    /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
    var response = this.http.post(url,variable_2);
    return response;
    }
}
