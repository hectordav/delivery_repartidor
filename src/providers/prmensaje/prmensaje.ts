import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PrrutasProvider } from '../../providers/prrutas/prrutas';

@Injectable()
export class PrmensajeProvider {
	principal_url:string;
  constructor(public http: HttpClient, public ruta:PrrutasProvider) {
    console.log('Hello PrmensajeProvider Provider');
     this.principal_url=this.ruta.get_ruta();
  }
  enviar_mensaje_cliente(_token_usuario,_id_pedido,_mensaje){
    var variable_2=JSON.stringify({token:_token_usuario,id_pedido:_id_pedido, mensaje:_mensaje});
   	var url = this.principal_url+'push_cliente/enviar_mensaje_cliente';
      /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
    var response = this.http.post(url,variable_2);
    return response;
  }
  enviar_mensaje_establecimiento(_id_establecimiento,_id_pedido,_mensaje){
    var variable_2=JSON.stringify({id_establecimiento:_id_establecimiento,id_pedido:_id_pedido, mensaje:_mensaje});
   	var url = this.principal_url+'Push_establecimiento/enviar_mensaje_establecimiento';
      /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
    var response = this.http.post(url,variable_2);
    return response;
  }
  enviar_mensaje_repartidor_min_antes(_hora_min,_token_repartidor,_mensaje_2){
      var variable_2=JSON.stringify({hora_min:_hora_min, token:_token_repartidor,mensaje:_mensaje_2});
      var url = this.principal_url+'push_repartidor/enviar_mensaje_min_antes';
      /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
      var response = this.http.post(url,variable_2);
      return response;
    }


}
