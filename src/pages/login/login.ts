import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController,Platform } from 'ionic-angular';
import {PrloginProvider}from '../../providers/prlogin/prlogin';
import { User } from '../../providers/providers';
import { Diagnostic } from '@ionic-native/diagnostic';
import {SrvalerttoastService} from '../../services/srv-alert-toast';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  cuenta:any={
  correo:'',
  pass:'',
  token:'',
  serial:''};
  result_login:any;

  constructor(public navCtrl: NavController,public user: User,public toastCtrl: ToastController,public translateService: TranslateService,public prlogin:PrloginProvider,public platform:Platform, public alert_toast:SrvalerttoastService,private diagnostic: Diagnostic,) {
    this.verificar_gps();
  }

    // Attempt to login in through our User service
  public login_manual(){
    let login=this.cuenta.correo;
    let pass= this.cuenta.pass;
    let token=1;/*this.prlogin.getToken();*//*<--*/
    let serial=1;/*this.prlogin.get_serial();*//*<--*/
     this.prlogin.login_manual(login,pass,token,serial).subscribe(
        login => {
        let result_login=login;
        let data=result_login.data;
        let mensaje=result_login.mensaje;
        
        let result=this.result_login;
         console.log(result);
         if(mensaje=='NO Existe Usuario') {
           let mensaje='Login y contraseña no validos';
           this.loading_toast(mensaje);
         }else{
            let id_usuario;
            let nombre;
            let login;
            let id_nivel;
            let id_cliente;
            let cedula_cliente;
            let direccion;
            let telf;
            for(let value of data) {
             id_usuario=value.id_usuario;
             nombre=value.nombre;
             login=value.login;
             id_nivel=value.id_nivel;
             id_cliente=value.id_cliente;
             cedula_cliente=value.cedula_cliente;
             direccion=value.direccion;
             telf=value.telf;
            }
           if(id_nivel==1 || id_nivel==4|| id_nivel==3) {
             let mensaje='Debes ser un repartidor para iniciar sesion';
             this.loading_toast(mensaje);
           }else{
             this.prlogin.set_inicio_sesion(data);
             localStorage.setItem('delivery_repartidor',JSON.stringify(data))
             this.navCtrl.setRoot('HomePage');
           }
           console.log('entra en el else');
         }
        },
        err => {console.log(err);
        },
      );
  }
  loading_toast(valor){
    let toast = this.toastCtrl.create({
        message: valor,
        duration: 3000,
        position: 'middle'
      });
      toast.present();
  }
   /*verifica si el GPS está activo o no*/
  verificar_gps(){
    this.platform.ready().then((readySource) => {
    this.diagnostic.isLocationEnabled().then(
    (isAvailable) => {
    let gps:any=isAvailable;
    if(gps==false) {
      let _titulo="Error";
      let _mensaje= 'Detectamos que el GPS está apagado; para poder utilizar la aplicacion debe Encender el GPS; cierre la aplicacion encienda su GPS e Intente de nuevo';
       this.alert_toast.show_alert(_titulo,_mensaje);
    }
    }).catch( (e) => {
    console.log(e);
    console.log(JSON.stringify(e));
    });
    });
}
}
