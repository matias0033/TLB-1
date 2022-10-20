import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { InicioPageRoutingModule } from './inicio-routing.module';
import { InicioPage } from './inicio.page';
import { MapaComponent } from '../componentes/mapa/mapa.component';
import { PasajeroComponent } from '../componentes/pasajero/pasajero.component';
import { ConductorComponent } from '../componentes/conductor/conductor.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule,
  ],
  declarations: [InicioPage, MapaComponent, PasajeroComponent, ConductorComponent]
})
export class InicioPageModule { }
