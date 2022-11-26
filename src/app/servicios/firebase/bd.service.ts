import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { delay, filter, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { VehiculoModel } from 'src/app/models/vehiculo.model';

@Injectable({
  providedIn: 'root'
})
export class BdService {

  private url = 'https://tlbdesarrolloapp-default-rtdb.firebaseio.com';
  

  constructor(private http: HttpClient, private router: Router) { }


  crearVehiculo(vehiculo: VehiculoModel): Observable<any> {
    const uid = localStorage.getItem('uid');
    vehiculo.uid = uid;
    return this.http.post(`${this.url}/vehiculos.json`, vehiculo).pipe(
      map((resp: any) => {
        vehiculo.id = resp.placa;
        return vehiculo;
        
      })
    );
  }

  obtenerVehiculos() {
    return this.http
      .get(`${this.url}/vehiculos.json`)
      .pipe(map(this.crearArreglo),
      delay(800)
      );
  }

  obtenerVehiculo(id: string) {
    return this.http.get(`${this.url}/vehiculos/${id}.json`);
    
  }

  borrarVehiculo(id: string): Observable<any> {
    return this.http.delete(`${this.url}/vehiculos/${id}.json`)
  }

  private crearArreglo(vehiculosObj: object) {
    const vehiculos: VehiculoModel[] = [];
    if (vehiculosObj === null) {
      return [];
    }
    Object.keys(vehiculosObj).forEach((key) => {
      const vehiculo: VehiculoModel = vehiculosObj[key];
      vehiculo.id = key;
      vehiculos.push(vehiculo);
    });
    return vehiculos;
  }

}
