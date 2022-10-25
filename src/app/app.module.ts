import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { enterAnimation } from './animations/nav-animations'; /*1*/
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx'; /*4*/

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot({ navAnimation: enterAnimation }), AppRoutingModule], /*2*/
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, Geolocation], /*3*/
  bootstrap: [AppComponent],
})
export class AppModule { }

/* 1.- IMP. para Animaciones */
/* 2.- IMP. para Animaciones */

/* 3.- IMP. para Geolocation */
/* 4.- IMP. para Geolocation */