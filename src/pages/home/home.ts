import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Navbar } from 'ionic-angular';
import {PrloginProvider} from "../../providers/prlogin/prlogin";
import {PrubicacionProvider} from "../../providers/prubicacion/prubicacion";
import {PrpedidosProvider} from "../../providers/prpedidos/prpedidos";
import {SrvalerttoastService} from "../../services/srv-alert-toast";

/*estoy llamando el map-ubicacion del component para no crear el mapa directo en el modulo home*/
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  @ViewChild(Navbar) navBar: Navbar;
	result_ubicacion:any;
	id_usuario:any;
	result_pedidos:any;
	result_det_pedido:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public login: PrloginProvider, public ubicacion:PrubicacionProvider, public pr_pedido:PrpedidosProvider, public pr_alert_toast:SrvalerttoastService) {
  }
  ionViewDidEnter(){
    console.log('did enter');
    this.get_pedido_id_repartidor();
    setTimeout(()=>{
     this.guardar_ubicacion();
     },3000);
  }
  guardar_ubicacion(){
    let data=JSON.parse(localStorage.getItem('delivery_repartidor'));
    this.login.set_inicio_sesion(data);
  	let result_login=this.login.get_inicio_sesion();
    console.log(result_login);
		let id_usuario;
		 for(let value of result_login) {
			id_usuario=value.id_usuario;
			this.id_usuario=id_usuario;
		 }
		let lat_lng=this.login.getMylat()+','+this.login.getMylng();
		console.log(lat_lng);

		 this.ubicacion.guardar_ubicacion(id_usuario,lat_lng).subscribe(
		    ubicacion => {
		      this.result_ubicacion=ubicacion;
		       console.log('ubicacion_guardada');
		    },
		    err => {console.log("NO EXISTE REGISTRO");
		    },
		  );
  }
  get_pedido_id_repartidor(){
     let data=JSON.parse(localStorage.getItem('delivery_repartidor'));
    this.login.set_inicio_sesion(data);
    let result_login=this.login.get_inicio_sesion();
  	let _id_usuario; /*ojo quitar*/
     for(let value of result_login) {
      _id_usuario=value.id_usuario;
      this.id_usuario=_id_usuario;
     }
     let mensaje='Cargando pedidos pendientes';
      this.pr_alert_toast.show_loading(mensaje);
  	 this.pr_pedido.get_pedido_id_repartidor(_id_usuario).subscribe(
  	    pr_pedido => {
  	      this.result_pedidos=pr_pedido;
  	      console.log(this.result_pedidos);
          this.pr_alert_toast.dismis_loading();
  	       console.log("REGISTROS pedidos asignados a repartidor");
  	    },
  	    err => {console.log("NO EXISTE REGISTRO");
  	    },
  	  );
  }
  ver_pedido(item){
  	let _id_pedido=item.id_pedido;
  	this.pr_pedido.set_result_pedido(item);
  	 this.pr_pedido.get_det_pedido_id_pedido(_id_pedido).subscribe(
  	    pr_pedido => {
  	      this.result_det_pedido=pr_pedido;
  				this.pr_pedido.set_result_det_pedido(this.result_det_pedido);
  	       console.log("REGISTRO EXISTE");
  	       this.navCtrl.push('PedidoDescripcionPage');
  	    },
  	    err => {console.log("NO EXISTE REGISTRO");
  	    },
  	  );
  }
  buscar_nuevos_pedidos(){
     this.navCtrl.push('PedidoBuscarPage');
  }

}
