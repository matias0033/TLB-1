import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioPage } from './inicio.page';
import { MapaComponent } from '../componentes/mapa/mapa.component';
import { PasajeroComponent } from '../componentes/pasajero/pasajero.component';
import { ConductorComponent } from '../componentes/conductor/conductor.component';

const routes: Routes = [
  {
    path: '',
    component: InicioPage,
    children: [
      {
        path: 'mapa',
        component: MapaComponent
      },
      {
        path: 'pasajero',
        component: PasajeroComponent
      },
      {
        path: 'conductor',
        component: ConductorComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule { }
