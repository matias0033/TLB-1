import { Component, OnInit, OnDestroy } from '@angular/core';                //☻ OG//
import { AlertController, NavController } from '@ionic/angular';             //☻ OG//
import * as moment from 'moment';                                            //☻ OG//
import { Router } from '@angular/router';                                    //☻ OG//
/*import { ViajeModel } from 'src/app/models/viaje.model';                   //M Model//        
import { RutaModel } from 'src/app/models/ruta.model';                       //M Model//
import { VehiculoModel } from 'src/app/models/vehiculo.model';               //M Model// */
// import { BdService } from 'src/app/servicios/firebase/bd.service';           //M Servicio//
// import { GeneralService } from 'src/app/servicios/alertas/general.service';  //M Servicio//
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { Platform } from '@ionic/angular';



//////////////////////////////////
// DECLARACION VARIABLE GOOGLE ///
//////////////////////////////////
declare var google;

interface Marker {
  position: {
    lat: number;
    lng: number;
  };
  title: string;
}

// ☻ DATOS COMPONENT DEFAULT /////
@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.component.html',
  styleUrls: ['./conductor.component.scss'],
})
export class ConductorComponent implements OnInit, OnDestroy {

  // NUEVA INFO CARD M ///////////
  /*map = null;

  destinationLocation = '';
  directionsDisplay = new google.maps.DirectionsRenderer();
  directionsService = new google.maps.DirectionsService();

  indicatorsEle: HTMLElement = document.getElementById('indicators');

  viajes: ViajeModel[] = [];
  rutas: RutaModel[] = [];
  vehiculos: VehiculoModel[] = [];

  //suscripcionruta: Subscription;
  //suscripcionviaje: Subscription;
  //suscripcionvehiculo: Subscription;

  //suscripcion: Subscription;
  cargando = false;

  boolean = false;

  uidpasajero: string;
  nnombre: string;
  nombreruta: string;
  uidconductor: string;
  nombrechofer: string;
  patente: string;
  modelo: string;
  color: string;
  telefono: string;
  hora: string;

  tiempo: string;
  km: any;
  marker: any;
  longitud: any;
  latitud: any;

  geo: any;*/

  // ☻ INFO CARD PRINCIPAL ///////
  fecha: string;
  nombre: string;
  miembro: string;

  ////////////////////////////////
  // ☻ INFO CARD PRINCIPAL ///////
  ////////////////////////////////
  constructor(
    public alertController: AlertController,
    public navCtrl: NavController,
    private router: Router,

    // private bd: BdService,            //M CONSTRU//
    // private alertas: GeneralService,  //M CONSTRU//
    /*private geolocation: Geolocation, //M CONSTRU//
    protected platform: Platform      //M CONSTRU//*/

  ) {
    let miembro = JSON.parse(localStorage.getItem('miembro'));
    this.nombre = miembro.nombre;
    moment.locale('es-mx');
    this.fecha = moment().format("D MMM YYYY");
    /*this.router.navigate(['/inicio/pasajero']); /*(['/inicio @@@/pasajero'@@@]); @@@@@@@@@@@ */
  }

  ngOnInit() {
  }

  ////////////////////////////////
  // ☻ ALERTA PARA DESLOGUEARSE //
  ////////////////////////////////
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

  ////////////////////////////////
  // ☻ NAVEGACION COMPONENTE /////
  ////////////////////////////////
  componentemapa() {
    this.router.navigate(['/inicio/mapa']);
  }

  ngOnDestroy() {
  }

  organizaViaje() {
    this.router.navigate(['/inicio/infoconductor']);
  }

}

/*segmentChanged($event) {
    console.log($event)
    let direccion = $event.detail.value;
    //Cargar una ruta del Componente.
    this.router.navigate(['/inicio/' + direccion]);*/