import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms' /*2*/
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup; /*3*/

  constructor(public fb: FormBuilder, /*4*/
    public alertController: AlertController, /*7*/
    public navCtrl: NavController) { /*9*/
    this.formularioRegistro = this.fb.group({
      'usuario': new FormControl("", Validators.required),
      'pass': new FormControl("", Validators.required),
      'confirmacionPass': new FormControl("", Validators.required)
    }) /*5*/
  }

  ngOnInit() {
  }

  async guardar() {
    var f = this.formularioRegistro.value;

    if (this.formularioRegistro.invalid) {
      const alert = await this.alertController.create({
        header: 'Datos Incompletos',
        message: 'Porfavor rellene los campos requeridos.',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }
    /*6*/
    var miembro = {
      usuario: f.usuario,
      pass: f.pass
    }

    localStorage.setItem('miembro', JSON.stringify(miembro)); /*8*/
  }

}

/* 2.-IMP.REG: SE AGREGÓ DESDE LINEA 2 A 7 */
/* 3.-IMP.REG: SE AGREGÓ ESTA LINEA */
/* 4.-IMP.REG: SE AGREGÓ LO QUE ESTÁ DENTRO DE () */
/* 5.-IMP.REG: SE AGREGÓ DESDE LINEA 22 A 26 */
/* PARAMETROS DE LINEA 22 A 24 SE USARAN EN: registro.page.html */

/* 6.-IMP.VALID: SE AGREGÓ DESDE LINEA 31 a 43 */
/* 7.-IMP.VALID: SE AGREGÓ ESTA LINEA */
/* 8.-IMP.VALID: SE AGREGÓ DESDE LINEA 44 a 49 */

/* 9.-IMP.GUARD: SE AGREGÓ ESTA LINEA */