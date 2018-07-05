import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PrloginProvider} from "../../providers/prlogin/prlogin";
import {PrpedidosProvider} from "../../providers/prpedidos/prpedidos";
import {SrvalerttoastService} from "../../services/srv-alert-toast";


@IonicPage()
@Component({
  selector: 'page-pedidos-historial',
  templateUrl: 'pedidos-historial.html',
})
export class PedidosHistorialPage {
	result_pedidos:any;
	result_det_pedido:any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public pr_login:PrloginProvider, public pr_pedido:PrpedidosProvider, public pr_alert_toast:SrvalerttoastService) {
  }
  ionViewDidLoad(){
  	this.historial_pedidos();
  }
  historial_pedidos(){
  	let result_login=this.pr_login.get_inicio_sesion();
  	let _id_usuario; /*ojo quitar*/
     for(let value of result_login) {
      _id_usuario=value.id_usuario;
     }
     let mensaje='Cargando Historial';
     this.pr_alert_toast.show_loading(mensaje);
     this.pr_pedido.get_historial_pedido_id_repartidor(_id_usuario).subscribe(
  	    pr_pedido => {
  	      let historial_pedidos=pr_pedido;
  	      let mensaje=historial_pedidos.mensaje;
  	      if(mensaje=='Historial NO encontrado') {
  	      	let mensaje='No existen pedidos';
  	      	this.pr_alert_toast.mensaje_toast_pie(mensaje);
  	      }else{
  	      	this.result_pedidos=historial_pedidos.data;
  	      }
  	      this.pr_alert_toast.dismis_loading();
  	    },
  	    err => {console.log("NO EXISTE REGISTRO");
  	    },
  	  );
  }
    ver_pedido(item){
  	let _id_pedido=item.id_pedido;
  	this.pr_pedido.set_result_pedido(item);
  		let mensaje='Cargando detalle de pedido';
     this.pr_alert_toast.show_loading(mensaje);
  	 this.pr_pedido.get_det_pedido_id_pedido(_id_pedido).subscribe(
	    pr_pedido => {
	      this.result_det_pedido=pr_pedido;
				this.pr_pedido.set_result_det_pedido(this.result_det_pedido);
	       console.log("REGISTRO EXISTE");
	        this.pr_alert_toast.dismis_loading();
	       this.navCtrl.push('PedidosVerPage');
	    },
	    err => {console.log("NO EXISTE REGISTRO");
	    },
	   );
  }

}
