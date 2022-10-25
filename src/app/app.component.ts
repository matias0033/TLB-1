import { Component } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx'; /*1*/
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  constructor(
    protected platform: Platform,
    //protected navController: NavController,
    //public LocalStorage: StorageService,

    private geolocation: Geolocation) { /*3*/
    this.platform.ready().then(async () => {
      //await this.LocalStorage.init();
      this.getGeolocation();
    }); /*5*/
  }



  /* @@@@@ GEOLOCATION @@@@@ (NO TOCAR) */
  getGeolocation() { /*2*/

    this.geolocation.getCurrentPosition().then((resp) => {

      console.log("resp ", resp); /*4*/
      // resp.coords.latitude
      // resp.coords.longitude
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
    });
  }
}

/* 1.- IMP. para Geolocation */
/* 2.- IMP. para Geolocation */
/* 3.- IMP. para Geolocation */
/* 4.- IMP. para Geolocation */
/* 5.- IMP. para Geolocation */

// SINTAXIS SUS REVISAR POSTERIORMENTE