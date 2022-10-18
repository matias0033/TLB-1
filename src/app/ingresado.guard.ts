import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngresadoGuard implements CanActivate {

  constructor(public navCtrl: NavController) { } /*2*/

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem('ingresado')) {
      return true;
    } else {
      this.navCtrl.navigateRoot('login');
      return false;
    }
  } /*1*/

}

/* 1.-GUARD: SE AGREGÓ 16 a 22 */
/* 2.-GUARD: SE AGREGÓ */