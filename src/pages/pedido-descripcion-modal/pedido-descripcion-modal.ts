import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import {PrpedidosProvider} from "../../providers/prpedidos/prpedidos";
import {PrloginProvider} from "../../providers/prlogin/prlogin";
import {PrmensajeProvider} from "../../providers/prmensaje/prmensaje";

@IonicPage()
@Component({
  selector: 'page-pedido-descripcion-modal',
  templateUrl: 'pedido-descripcion-modal.html',
})
export class PedidoDescripcionModalPage {
	result_buscar_pedido:any={
		id_pedido:'',
		id_establecimiento:'',
		nombre_establecimiento:'',
		nombre_usuario:'',
		token_usuario:'',
		direccion_entrega:'',
		detalles_direccion_entrega:'',
		lat_lng_direccion_entrega:'',
		direccion_establecimiento:'',
		detalles_direccion_establecimiento:'',
		lat_lng_establecimiento:'',
		hora_entrega:''
	};
	public remainingTime = 20;
	result_pedido_aceptado:any;
	result_pedido:any;
  result_ignorar_pedido:any;
  result_enviar_mensaje_cliente:any;
  result_enviar_mensaje_repartidor:any;
  id_usuario:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController, public pr_pedido:PrpedidosProvider,public pr_login: PrloginProvider,public pr_mensaje:PrmensajeProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedidoDescripcionModalPage');
    this.get_pedido_det_pedido();
    this.cuenta_regresiva();
  }
  cuenta_regresiva(){
    let interval = setInterval(() => {
      this.remainingTime--;
      // if time is over
      if (this.remainingTime == 0) {
        // stop interval
        clearInterval(interval)
        this.viewCtrl.dismiss();
      }
    }, 1000);
  }
  ignorar_pedido(){
    let result_login=this.pr_login.get_inicio_sesion();
    let _id_usuario;
     for(let value of result_login) {
    _id_usuario=value.id_usuario;
    this.id_usuario=_id_usuario;
    }
    let _id_entrega_pedido=this.result_buscar_pedido.id_entrega_pedido;
    this.pr_pedido.ignorar_pedido(_id_usuario,_id_entrega_pedido).subscribe(
        pr_pedido => {
          this.result_ignorar_pedido=pr_pedido;
           console.log("REGISTRO EXISTE");
            this.viewCtrl.dismiss();
        },
        err => {console.log("NO EXISTE REGISTRO");
        },
      );
  }
 	get_pedido_det_pedido(){
  	let _pedido=this.pr_pedido.get_result_buscar_pedido();
     for(let value of _pedido) {
      this.result_buscar_pedido.id_pedido=value.id_pedido;
      this.result_buscar_pedido.id_entrega_pedido=value.id_entrega_pedido
      this.result_buscar_pedido.id_establecimiento=value.id_establecimiento;
      this.result_buscar_pedido.nombre_establecimiento=value.nombre_establecimiento;
      this.result_buscar_pedido.nombre_usuario=value.nombre_usuario;
      this.result_buscar_pedido.token_usuario=value.token_usuario;
      this.result_buscar_pedido.direccion_entrega=value.direccion_entrega;
      this.result_buscar_pedido.detalles_direccion_entrega=value.detalles_direccion_entrega;
      this.result_buscar_pedido.lat_lng_direccion_entrega=value.lat_lng_direccion_entrega;
      this.result_buscar_pedido.direccion_establecimiento=value.direccion_establecimiento;
      this.result_buscar_pedido.detalles_direccion_establecimiento=value.detalles_direccion_establecimiento;
      this.result_buscar_pedido.lat_lng_establecimiento=value.lat_lng_establecimiento;
      this.result_buscar_pedido.hora_entrega=value.hora_entrega;
    }
    console.log(this.result_buscar_pedido);
  }
  aceptar_pedido(){
		let result_login=this.pr_login.get_inicio_sesion();
		let _id_usuario;
		 for(let value of result_login) {
		_id_usuario=value.id_usuario;
		this.id_usuario=_id_usuario;
		}
    let _id_entrega_pedido=this.result_buscar_pedido.id_entrega_pedido;
  	let _id_pedido=this.result_buscar_pedido.id_pedido;
  	  this.pr_pedido.buscar_pedido_aceptado(_id_pedido).subscribe(
  	     pr_pedido => {
  	       this.result_pedido_aceptado=pr_pedido;
  	        if(this.result_pedido_aceptado=='existe') {
  	        	this.pr_pedido.set_pedido_aceptado(1);
  	        	 this.viewCtrl.dismiss(true);
  	        }else{
  	        	this.pr_pedido.set_pedido_aceptado(0);
  	        	 this.pr_pedido.aceptar_pedido(_id_entrega_pedido,_id_usuario).subscribe(
  	        	    pr_pedido => {
  	        	      this.result_pedido=pr_pedido;
  	        	       console.log("REGISTRO EXISTE");
                     this.mensaje_cliente_establecimiento();
  	        	    },
  	        	    err => {console.log("NO EXISTE REGISTRO");
  	        	    },
  	        	  );
  	        }
  	     },
  	     err => {console.log("NO EXISTE REGISTRO");
  	     },
  	   );
  }
  mensaje_cliente_establecimiento(){
    let _token_usuario= this.result_buscar_pedido.token_usuario;
    let _id_pedido=this.result_buscar_pedido.id_pedido;
    let _id_establecimiento=this.result_buscar_pedido.id_establecimiento;
    /*resta los 10 min para enviarle un recordatorio al repartidor*/
    let _hora_entrega_split=this.result_buscar_pedido.hora_entrega.split('-');
    let _hora_fin=_hora_entrega_split['1'];
    let _hora_split=_hora_fin.split(':');
    let _hora=_hora_split['0'];
    let _min=_hora_split['1'];
    if(_min=='00'){
      _min='50';
      _hora=_hora-1;
    }else{
      _min=_min-10;
    }
    let _hora_min=_hora+':'+_min;
    console.log(_hora_min);
    /***************************************************************/
    /* toma el token del repartidor*/
    let result_login=this.pr_login.get_inicio_sesion();
    let _id_usuario=18;
    let _token_repartidor;
     for(let value of result_login) {
    _id_usuario=value.id_usuario;
    _token_repartidor=value.token;
    }
    /***************************************************************/
    let _establecimiento=this.result_buscar_pedido.nombre_establecimiento;
    let _mensaje_1='Su Pedido, fue asiganado a un repartidor, haga clic en el mismo para mas detalles';
    let _mensaje_2='Le recordamos que tiene un pedido pendiente en el establecimiento '+_establecimiento+', Ignore este mensaje si ya buscó su pedido';
     this.pr_mensaje.enviar_mensaje_cliente(_token_usuario,_id_pedido,_mensaje_1).subscribe(
       pr_mensaje => {
         this.result_enviar_mensaje_cliente=pr_mensaje;
          console.log("se envio el mensaje al cliente");
       },
       err => {console.log("NO EXISTE REGISTRO");
       },
     );
     this.pr_mensaje.enviar_mensaje_establecimiento(_id_establecimiento,_id_pedido,_mensaje_1).subscribe(
       pr_mensaje => {
         this.result_enviar_mensaje_repartidor=pr_mensaje;
          console.log("se envio el mensaje al establecimiento");
          this.viewCtrl.dismiss(true);
       },
       err => {console.log("NO EXISTE REGISTRO");
       },
     );

     /*aqui envia el mensaje al repartidor con unos minutos antes*/
     this.pr_mensaje.enviar_mensaje_repartidor_min_antes(_hora_min,_token_repartidor,_mensaje_2).subscribe(
       pr_mensaje => {
         this.result_enviar_mensaje_repartidor=pr_mensaje;
          console.log("se envio el mensaje al establecimiento");
          this.viewCtrl.dismiss(true);
       },
       err => {console.log("NO EXISTE REGISTRO");
       },
     );

  }

}
