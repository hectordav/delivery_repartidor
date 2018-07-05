import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Camera } from '@ionic-native/camera';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Device } from '@ionic-native/device';
import { OneSignal } from '@ionic-native/onesignal';
import {NativeGeocoder} from '@ionic-native/native-geocoder';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Items } from '../mocks/providers/items';
import { Settings } from '../providers/providers';
import { User } from '../providers/providers';
import { Api } from '../providers/providers';
import { MyApp } from './app.component';
import { PrloginProvider } from '../providers/prlogin/prlogin';
import { PrrutasProvider } from '../providers/prrutas/prrutas';
import { PrubicacionProvider } from '../providers/prubicacion/prubicacion';
import { PrpedidosProvider } from '../providers/prpedidos/prpedidos';
import { PrmensajeProvider } from '../providers/prmensaje/prmensaje';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import {SrvalerttoastService} from '../services/srv-alert-toast';
import { Diagnostic } from '@ionic-native/diagnostic';
import { HttpModule} from '@angular/http';





// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'Hello'
  });
}

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    HttpModule,
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    Api,
    Items,
    User,
    Camera,
    SplashScreen,
    StatusBar,
    Device,
    OneSignal,
    NativeGeocoder,
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    PrloginProvider,
    PrrutasProvider,
    PrubicacionProvider,
    PrpedidosProvider,
    PrmensajeProvider,
    SrvalerttoastService,
    LaunchNavigator,
    Diagnostic  
    ]
})
export class AppModule { }
