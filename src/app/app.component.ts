import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform,AlertController,LoadingController } from 'ionic-angular';
import { Device } from '@ionic-native/device';
import { OneSignal } from '@ionic-native/onesignal';
import { PrloginProvider } from '../providers/prlogin/prlogin';
import { Settings } from '../providers/providers';
declare var cordova:any;

@Component({
  template: `<ion-menu [content]="content">
    <ion-header>
      <ion-toolbar color="color_nav_bar">
        <ion-title>Menu Principal</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">
          {{p.title}}
        </button>
      </ion-list>
    </ion-content>
     <ion-footer>
    <div align="center">
      <button menuClose ion-item (click)="cerrar_sesion()">
            Cerrar sesión
       </button>
    </div>
    </ion-footer>

  </ion-menu>
  <ion-nav #content [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage: any = (localStorage.getItem('delivery_repartidor')) ? 'HomePage' : 'TutorialPage';
  @ViewChild(Nav) nav: Nav;
  pages: any[] = [
    { title: 'Home', component: 'HomePage' },
    { title: 'Historial de pedidos', component: 'PedidosHistorialPage' }
  ]
  /*variables*/
  serial_device:any;
  loader:any;
  backPressed:any=false;

  constructor(private translate: TranslateService, public platform: Platform, settings: Settings, private config: Config, private statusBar: StatusBar, private splashScreen: SplashScreen,public oneSignal: OneSignal, public device:Device, public alertCtrl:AlertController, public login:PrloginProvider, public loadingCtrl:LoadingController) {
    platform.ready().then(() => {
     if (platform.is('cordova')) {
           // Okay, so the platform is ready and our plugins are available.
           // Here you can do any higher level native things you might need.
           this.statusBar.styleDefault();
           this.splashScreen.hide();
           this.notificaciones();
           this.background();
           /*****************backbutton***********************/
           platform.registerBackButtonAction(() => {
             if (this.nav.canGoBack()) {
              this.nav.pop()
              return;
            }
            if(!this.backPressed) {
              this.backPressed = true
              this.presentLoading();
              setTimeout(() => this.backPressed = false, 2000)
              return;
            }else{
             this.platform.exitApp();
            }
          });
           /***************************************************/
         } else {
            /*no hace nada por esta en la web*/
         }
    });
    this.initTranslate();
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();

    if (browserLang) {
      if (browserLang === 'zh') {
        const browserCultureLang = this.translate.getBrowserCultureLang();

        if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
          this.translate.use('zh-cmn-Hans');
        } else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
          this.translate.use('zh-cmn-Hant');
        }
      } else {
        this.translate.use(this.translate.getBrowserLang());
      }
    } else {
      this.translate.use('en'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }
     presentLoading() {
       this.loader= this.alertCtrl.create({
             title: 'Confirmar',
          message: 'Realmente desea Salir',
          buttons: [
            {
              text: 'Cancelar',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            },
            {
              text: 'Salir',
              handler: () => {
               this.platform.exitApp();
              }
            }
          ]
         });
      this.loader.present();  
    }
    background(){
   /******************en segundo plano********************+*/
      /* esto se debe agregar en la consola raiz del proyecto
     ionic cordova plugin add cordova-plugin-background-mode   */
      console.log("MyApp::constructor platform.ready");
      cordova.plugins.backgroundMode.setDefaults({
         title: 'Delivery Repartidor', 
         text: 'Esta activo en segundo plano'
         /*icon:'assets/img/logo_2.png'*/
        },
      cordova.plugins.backgroundMode.enable()
        )
  }
   private notificaciones(){
    this.serial_device=this.device.uuid;
    this.oneSignal.startInit('c37757d8-c2fd-4fc6-97e6-875f33f0ac90', '340053289094'); //(appId_onesignal,googleProjectNumber)
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
    this.oneSignal.handleNotificationOpened()
  .subscribe(jsonData => {
    let alert = this.alertCtrl.create({
      title: jsonData.notification.payload.title,
      subTitle: jsonData.notification.payload.body,
      buttons: ['OK']
    });
    alert.present();
    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  });
  this.oneSignal.endInit();
  this.presentLoading_carga();
  this.oneSignal.getIds().then((id)=>{
    let el_id=id.userId; /*el id para guardarlo en el token de la base de datos*/
    this.login.setToken(el_id);
    this.serial_device=this.device.uuid; /* el serial del dispositivo*/
    this.login.set_serial(this.serial_device+'2');
    this.loader.dismiss();
  })
  }
  presentLoading_carga() {
      this.loader = this.loadingCtrl.create({
          content: "Cargando..."
      });
      this.loader.present();
   }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  cerrar_sesion(){
    localStorage.removeItem('delivery_repartidor');
    this.nav.setRoot('LoginPage');
  }
}
