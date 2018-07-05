import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,Navbar } from 'ionic-angular';
import {PrloginProvider} from "../../providers/prlogin/prlogin";
import {PrpedidosProvider} from "../../providers/prpedidos/prpedidos";
import {GoogleMapsLatLng} from 'ionic-native';
import {SrvalerttoastService} from '../../services/srv-alert-toast';

declare var google: any;


@IonicPage()
@Component({
  selector: 'page-pedido-buscar',
  templateUrl: 'pedido-buscar.html',
})
export class PedidoBuscarPage {
  @ViewChild(Navbar) navBar: Navbar;
	splash = true;
	tabBarElement: any;
	result_buscar_pedido:any;
	intervalo:any;
	lat_lng_establecimiento:any
	lat_lng_usuario:any;
  id_usuario:any;
	public render = new google.maps.DirectionsRenderer();
  public directionsService= new google.maps.DirectionsService;
  distancia:any;
  g_distancia:any;
  var_buscar_pedido:any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams,public pr_login: PrloginProvider, public pr_pedido:PrpedidosProvider, public modalCtrl:ModalController,public alert_toast:SrvalerttoastService,) {
  	 /*this.tabBarElement = document.querySelector('.tabbar');     */
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedidoBuscarPage');
    this.buscar_pedido();
    this.setBackButtonAction();
  }
  setBackButtonAction(){
   this.navBar.backButtonClick = () => {
     console.log('presiona el back de la pantalla');
     clearInterval(this.intervalo);
     this.navCtrl.popToRoot();
   }
  }
   intevalo_buscar_pedidos(){
     this.intervalo = setInterval(() => {
         this.buscar_pedido();
    }, 7000);
  }
  buscar_pedido(){
  	let result_login=this.pr_login.get_inicio_sesion();
		let id_usuario;
		 for(let value of result_login) {
			id_usuario=value.id_usuario;
			this.id_usuario=id_usuario;
		 }
     clearInterval(this.intervalo);
		this.lat_lng_usuario=this.pr_login.getMylat()+','+this.pr_login.getMylng();
		console.log(this.lat_lng_usuario);
		 this.pr_pedido.buscar_pedidos(id_usuario).subscribe(
	    pr_pedido => {
	      this.result_buscar_pedido=pr_pedido;
	       if(this.result_buscar_pedido==null) {
	       	console.log("no hay pedidos vuelve a abrir el ciclo para que no lo repita a cada rato");
               this.intevalo_buscar_pedidos();
	       }else{
	       	/*existe el pedido*/
	     		 for(let value of this.result_buscar_pedido) {
	     				this.lat_lng_establecimiento=value.lat_lng_establecimiento;
	     		 }
	     		 this.pr_pedido.set_result_buscar_pedido(this.result_buscar_pedido);
	       	this.calcular_distancia();
	       }
	    },
	    err => {console.log(err);
	    },
		 );
  }
    calcular_distancia(){
     console.log("entra en Calulcar Ruta");
    console.log("entro en calcular ruta");
    let modal = this.modalCtrl.create('PedidoDescripcionModalPage');
    let lat_lng_i=this.lat_lng_establecimiento.split(',');
    let lat_lng_usuario=this.lat_lng_usuario.split(',');
    console.log(lat_lng_i);
    let lat_i:any=parseFloat(lat_lng_i['0']);
    let lng_i:any=parseFloat(lat_lng_i['1']);
    let lat_f:any=parseFloat(lat_lng_usuario['0']);
    let lng_f:any=parseFloat(lat_lng_usuario['1']);
    let inicio=new GoogleMapsLatLng(lat_i,lng_i);
    let fin=new GoogleMapsLatLng(lat_f,lng_f);
    let panel = document.getElementById('panel'); 
    let directionsDisplay = null;
            directionsDisplay = this.render;
            /*el panel que tengo en el html OJO debe ir*/
     document.getElementById("panel").innerHTML = "";
     console.log('entro en panel');
            /*directionsDisplay.setMap(this.map);*/
            directionsDisplay.setPanel(panel);
      this.directionsService.route({
        origin: inicio,
        destination: fin,
        travelMode: google.maps.TravelMode.DRIVING
      },(response,status)=>{
        console.log('entro en response status');  
        let distance = null;
        let duration=null;
        if(status === google.maps.DirectionsStatus.OK) {
        /*este muestra la ruta marcada*/
          directionsDisplay.setDirections(response);
         let leg = response.routes[ 0 ].legs[ 0 ];
         console.log('en leg');
         console.log(leg);
        let legs = response.routes[0].legs;
        distance = legs[0].distance.text;
        duration = legs[0].duration.text;
        this.distancia=distance;
        let distancia_split=this.distancia.split(' ');
        this.distancia=distancia_split['0'];
        if(this.distancia>=this.g_distancia) {
          // si la distancia es mayor 
           console.log('la distancia mayor '+this.distancia);
           this.intevalo_buscar_pedidos();
        }else{
          console.log("si existe para el intervalo");
          console.log('la distancia menor '+this.distancia);
         clearInterval(this.intervalo);
         /*aqui verifica si confirmo el pedido*/
          modal.onDidDismiss(confirmar => {
            if (confirmar) {
             /*aqui va el que envia al pedido aceptado con el toast incluido*/
             this.pedido_aceptado();
            } else {
            console.log('entra en el else de ignorar pedido');
            /*como ignoro el pedido, vuelve a tomar el ciclo*/
             this.intevalo_buscar_pedidos();
            }
          });
           modal.present();
        }
        console.log('la distancia calculada');
        console.log(this.distancia);
          /* directionsDisplay.setMap(this.map);*/
        }else{
          console.log('como no calcula la direccion entra nuevamente a intervalo buscar pedidos hasta que consiga una');
           this.intevalo_buscar_pedidos();
        } 
      }, err => {console.log(err);
        alert(err);
            },)  
  }
  pedido_aceptado(){
  	let pedido_aceptado=this.pr_pedido.get_pedido_aceptado();
  	console.log('pedido aceptado');
  	if(pedido_aceptado=='1') {
  		let titulo="Info";
  		let mensaje="Lo sentimos el pedido fue aceptado por otro repartidor";
  		this.alert_toast.show_alert(titulo,mensaje);
  	}else{
  		let mensaje="Felicidades, has aceptado el pedido, para ver el detalle del mismo, haga clic en ver";
  		this.alert_toast.loading_toast(mensaje);
  		this.navCtrl.popToRoot();
  	}
  }
  volver_home(){
  	clearInterval(this.intervalo);
  	this.navCtrl.popToRoot();
  }


}
