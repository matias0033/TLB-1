import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioPage } from './inicio.page';
import { MapaComponent } from '../componentes/mapa/mapa.component';
import { PasajeroComponent } from '../componentes/pasajero/pasajero.component';
import { ConductorComponent } from '../componentes/conductor/conductor.component';
import { InfoconductorComponent } from '../componentes/infoconductor/infoconductor.component';
import { AutoComponent } from '../componentes/auto/auto.component';


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
      {
        path: 'infoconductor',
        component: InfoconductorComponent
      }, 
      {
        path: 'auto',
        component: AutoComponent
      }, 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule { }
