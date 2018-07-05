import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PrrutasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PrrutasProvider {
   principal_url:string='http://mimandadero.com/delivery_rest/';

  constructor(public http: HttpClient) {
    console.log('Hello PrrutasProvider Provider');
  }
   get_ruta() {
    return this.principal_url;
  }


}
