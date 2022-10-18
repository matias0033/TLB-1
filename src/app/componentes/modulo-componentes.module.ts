import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MapaComponent } from './mapa/mapa.component';



@NgModule({
  declarations: [MapaComponent], /*3*/
  imports: [
    CommonModule,
    FormsModule, /*1*/
    IonicModule /*2*/
  ],
  exports: [MapaComponent] /*4*/
})
export class ModuloComponentesModule { }
