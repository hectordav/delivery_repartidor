import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {PrpedidosProvider} from "../../providers/prpedidos/prpedidos";
import {PrmensajeProvider} from "../../providers/prmensaje/prmensaje";
import {SrvalerttoastService} from '../../services/srv-alert-toast';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import {PrloginProvider} from "../../providers/prlogin/prlogin";



@IonicPage()
@Component({
  selector: 'page-pedido-descripcion',
  templateUrl: 'pedido-descripcion.html',
})
export class PedidoDescripcionPage {
	result_pedido:any={
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
	result_det_pedido:any;
	result_enviar_mensaje_cliente:any;
  result_cambio_status_pedido:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public pr_pedido:PrpedidosProvider,public alertCtrl:AlertController, public pr_mensaje:PrmensajeProvider, public alert_toast:SrvalerttoastService, private launchNavigator: LaunchNavigator,public pr_login:PrloginProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedidoDescripcionPage');
    this.get_pedido_det_pedido();
  }
  get_pedido_det_pedido(){
  	let _pedido=this.pr_pedido.get_result_pedido();
  	this.result_pedido.id_pedido=_pedido.id_pedido;
  	this.result_pedido.id_establecimiento=_pedido.id_establecimiento;
  	this.result_pedido.nombre_establecimiento=_pedido.nombre_establecimiento;
  	this.result_pedido.nombre_usuario=_pedido.nombre_usuario;
  	this.result_pedido.token_usuario=_pedido.token_usuario;
  	this.result_pedido.direccion_entrega=_pedido.direccion_entrega;
  	this.result_pedido.detalles_direccion_entrega=_pedido.detalles_direccion_entrega;
  	this.result_pedido.lat_lng_direccion_entrega=_pedido.lat_lng_direccion_entrega;
  	this.result_pedido.direccion_establecimiento=_pedido.direccion_establecimiento;
  	this.result_pedido.detalles_direccion_establecimiento=_pedido.detalles_direccion_establecimiento;
  	this.result_pedido.lat_lng_establecimiento=_pedido.lat_lng_establecimiento;
  	this.result_pedido.hora_entrega=_pedido.hora_entrega;
  	this.result_det_pedido=this.pr_pedido.get_result_det_pedido();
    console.log(this.result_pedido);
  	console.log(this.result_det_pedido);
  }
  mensaje_cliente(){
  	let _token_usuario=this.result_pedido.token_usuario;
  	let _id_pedido=this.result_pedido.id_pedido
  	 let prompt = this.alertCtrl.create({
      title: 'Mensaje a Cliente',
      inputs: [
        {
          name: 'txt_mensaje',
          placeholder: 'Escriba su mensaje'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Enviar',
          handler: data => {
           let _mensaje=data.txt_mensaje;
           console.log(_mensaje);
            this.pr_mensaje.enviar_mensaje_cliente(_token_usuario,_id_pedido,_mensaje).subscribe(
               pr_mensaje => {
                 this.result_enviar_mensaje_cliente=pr_mensaje;
                 let _titulo='Mensaje a cliente';
                 let _mensaje='El mensaje fue enviado';
                 this.alert_toast.show_alert(_titulo,_mensaje);
                  console.log("REGISTRO EXISTE");
               },
               err => {console.log("NO EXISTE REGISTRO");
               },
             );

          }
        }
      ]
    });
    prompt.present();
  }
  mensaje_establecimiento(){
  	let _id_establecimiento=this.result_pedido.id_establecimiento;
  	let _id_pedido=this.result_pedido.id_pedido;
  	 let prompt = this.alertCtrl.create({
      title: 'Mensaje a Establecimiento',
      inputs: [
        {
          name: 'txt_mensaje',
          placeholder: 'escriba su mensaje'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Enviar',
          handler: data => {
           let _mensaje=data.txt_mensaje;
           console.log(_mensaje);
            this.pr_mensaje.enviar_mensaje_establecimiento(_id_establecimiento,_id_pedido,_mensaje).subscribe(
               pr_mensaje => {
                 this.result_enviar_mensaje_cliente=pr_mensaje;
                 let _titulo='Mensaje a cliente';
                 let _mensaje='El mensaje fue enviado';
                 this.alert_toast.show_alert(_titulo,_mensaje);
                  console.log("REGISTRO EXISTE");
               },
               err => {console.log("NO EXISTE REGISTRO");
               },
             );

          }
        }
      ]
    });
    prompt.present();
  }
  mapa_establecimiento(){
  	let _titulo="Ruta al establecimiento"
  	let accion;
  	let _mensaje='Esta accion mostrará la ruta al establecimiento, desea continuar?';
          let alert = this.alertCtrl.create({
          title: _titulo,
          message: _mensaje,
          buttons: [
          {
            text: 'No',
            role: 'cancel',
            handler: () => {
              accion=0;
            }
          },
          {
            text: 'Si',
            handler: () => {
              console.log('entra en si');
              this.abrir_mapa_establecimiento();
            }
          }
          ]
          });
          alert.present();
  }
  mapa_cliente(){
  	let _titulo="Ruta a destino"
  	let accion;
  	let _mensaje='Esta accion mostrará la ruta al cliente destino, desea continuar?';
          let alert = this.alertCtrl.create({
          title: _titulo,
          message: _mensaje,
          buttons: [
          {
            text: 'No',
            role: 'cancel',
            handler: () => {
              accion=0;
            }
          },
          {
            text: 'Si',
            handler: () => {
              console.log('entra en si');
              this.abrir_mapa_pedido();
            }
          }
          ]
          });
          alert.present();
  }
  abrir_mapa_establecimiento() {
    		let inicio=this.pr_login.getMylat()+','+this.pr_login.getMylng();
        let fin= this.result_pedido.lat_lng_establecimiento;
        let options: LaunchNavigatorOptions = {
          start: inicio
        };
        this.launchNavigator.navigate(fin, options)
        .then(
        success => console.log('Launched navigator'),
        error => console.log('Error launching navigator'+ error)
      );  
  }
  abrir_mapa_pedido() {	
    		let inicio=this.pr_login.getMylat()+','+this.pr_login.getMylng();
        let fin= this.result_pedido.lat_lng_direccion_entrega;
        console.log(fin);
        let options: LaunchNavigatorOptions = {
          start: inicio
        };
        this.launchNavigator.navigate(fin, options)
        .then(
        success => console.log('Launched navigator'),
        error => console.log('Error launching navigator'+ error)
      );  
  }
  cambiar_status_pedido(){
    let _titulo="Entregar pedido a cliente"
    let accion;
    let _mensaje='Desea entregar el pedido al cliente';
          let alert = this.alertCtrl.create({
          title: _titulo,
          message: _mensaje,
          buttons: [
          {
            text: 'No',
            role: 'cancel',
            handler: () => {
              accion=0;
            }
          },
          {
            text: 'Si',
            handler: () => {
              console.log('entra en si');
              this.entregar_pedido_cliente();
            }
          }
          ]
          });
          alert.present();
  }
  entregar_pedido_cliente(){
    let _id_pedido=this.result_pedido.id_pedido;
    let _id_status_pedido=4;
    let token_usuario=this.result_pedido.token_usuario;
     this.pr_pedido.cambiar_status_pedido(_id_pedido,_id_status_pedido,token_usuario).subscribe(
        pr_pedido => {
          this.result_cambio_status_pedido=pr_pedido;
           console.log("REGISTRO EXISTE");
           let _titulo="Info";
           let _mensaje="Pedido Entregado al cliente";
           this.alert_toast.show_alert(_titulo,_mensaje);
           this.navCtrl.popToRoot();
        },
        err => {console.log("NO EXISTE REGISTRO");
        },
      );
  }


}
