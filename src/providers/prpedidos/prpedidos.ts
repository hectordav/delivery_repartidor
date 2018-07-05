import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PrrutasProvider } from '../../providers/prrutas/prrutas';
import { Http } from '@angular/http';

@Injectable()
export class PrpedidosProvider {
	principal_url:string;
	result_det_pedido:any;
	result_pedido:any;
  pedido_aceptado:any;
  result_buscar_pedido:any;
  constructor(public http: HttpClient,public ruta:PrrutasProvider, public http_2:Http) {
    this.principal_url=this.ruta.get_ruta();
  }
  set_result_buscar_pedido(value){
    this.result_buscar_pedido=value;
  }
  get_result_buscar_pedido(){
    return this.result_buscar_pedido;
  }
  set_pedido_aceptado(value){
    this.pedido_aceptado=value;
  }
  get_pedido_aceptado(){
    return this.pedido_aceptado;
  }
  set_result_pedido(value){
  	this.result_pedido=value;
  }
  get_result_pedido(){
  	return this.result_pedido;
  }
  set_result_det_pedido(value){
  	this.result_det_pedido=value;
  }
  get_result_det_pedido(){
  	return this.result_det_pedido;
  }
  get_pedido_id_repartidor(_id_repartidor){
    var variable_2=JSON.stringify({id_repartidor:_id_repartidor});
  	var url = this.principal_url+'entrega_pedido/get_pedido_id_repartidor';
    /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
    var response = this.http.post(url,variable_2);
		return response;
  }
  get_historial_pedido_id_repartidor(_id_repartidor){
    var variable_2=JSON.stringify({id_repartidor:_id_repartidor});
    var url = this.principal_url+'entrega_pedido/get_historial_pedido_id_repartidor';
    /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
    var response = this.http_2.post(url,variable_2).map(res => res.json());
    return response;
  }
  get_det_pedido_id_pedido(_id_pedido){
  	var variable_2=JSON.stringify({id_pedido:_id_pedido});
  	var url = this.principal_url+'pedido/get_det_pedido_id_pedido';
    /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
    var response = this.http.post(url,variable_2);
		return response;
  }
  buscar_pedidos(_id_usuario){
    var variable_2=JSON.stringify({id_usuario:_id_usuario});
    var url = this.principal_url+'pedido/buscar_pedido';
    /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
    var response = this.http.post(url,variable_2);
    return response;
  }
  buscar_pedido_aceptado(_id_pedido){
    var variable_2=JSON.stringify({id_pedido:_id_pedido});
    var url = this.principal_url+'pedido/buscar_pedido_aceptado';
    /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
    var response = this.http.post(url,variable_2);
    return response;
  }
  aceptar_pedido(_id_entrega_pedido,_id_usuario){
    var variable_2=JSON.stringify({id_entrega_pedido:_id_entrega_pedido,id_usuario:_id_usuario});
    var url = this.principal_url+'pedido/aceptar_pedido';
    /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
    var response = this.http.post(url,variable_2);
    return response;
  }
  ignorar_pedido(_id_usuario,_id_entrega_pedido){
    var variable_2=JSON.stringify({id_entrega_pedido:_id_entrega_pedido,id_usuario:_id_usuario});
    var url = this.principal_url+'pedido/ignorar_pedido';
    /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
    var response = this.http.post(url,variable_2);
    return response; 
  }
  cambiar_status_pedido(_id_pedido,_id_status_pedido,token_usuario){
    var variable_2=JSON.stringify({id_pedido:_id_pedido,id_status_pedido:_id_status_pedido, token_usuario:token_usuario});
    var url = this.principal_url+'pedido/cambiar_status_pedido';
    /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
    var response = this.http.post(url,variable_2);
    return response; 
  }


}
