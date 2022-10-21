import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit {

  fecha: string;
  nombre: string;
  miembro: string;

  constructor(
    public alertController: AlertController,
    public navCtrl: NavController,
    private router: Router) {
    let miembro = JSON.parse(localStorage.getItem('miembro'));
    this.nombre = miembro.nombre;
    moment.locale('es-mx');
    this.fecha = moment().format("D MMM YYYY");
    /*this.router.navigate(['/inicio/pasajero']); /*(['/inicio @@@/pasajero'@@@]); @@@@@@@@@@@ */
  }

  ngOnInit() {
  }

  async salir() {
    const alert = await this.alertController.create({
      header: 'Salir',
      message: '¿Seguro desea salir?',
      buttons: [
        {
          text: 'No, cancelar',
          handler: () => {

          }
        }, {
          text: 'Si, salir',
          handler: () => {
            localStorage.removeItem('ingresado');
            this.navCtrl.navigateRoot('login');
          }
        }
      ]
    });
    await alert.present();
  }

  componentemapa() {
    this.router.navigate(['/inicio/mapa']);
  }
}

/*segmentChanged($event) {
    console.log($event)
    let direccion = $event.detail.value;
    //Cargar una ruta del Componente.
    this.router.navigate(['/inicio/' + direccion]);*/