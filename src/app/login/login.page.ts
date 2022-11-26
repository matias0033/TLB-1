import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms'; /*2*/
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formularioLogin: FormGroup; /*3*/

  constructor(
    public fb: FormBuilder /*4*/,
    public alertController: AlertController /*7*/,
    public navCtrl: NavController
  ) {
    /*9*/
    this.formularioLogin = this.fb.group({
      usuario: new FormControl('', Validators.required),
      pass: new FormControl('', Validators.required),
    }); /*5*/
  }

  ngOnInit() {}

  async ingresar() {
    var f = this.formularioLogin.value;

    var miembro = JSON.parse(localStorage.getItem('miembro'));

    if (miembro.usuario == f.usuario && miembro.pass == f.pass) {
      console.log('Ingresado');
      localStorage.setItem('ingresado', 'true'); /*8*/
      this.navCtrl.navigateRoot('inicio'); /*10*/
    } else {
      const alert = await this.alertController.create({
        header: 'Datos Incorrectos',
        message: 'Los datos ingresados son incorrectos.',
        buttons: ['Aceptar'],
      });
      await alert.present();
    }
  } /*6*/

  /* IMPLEMENTACION MODULO AXIOS */
  async AxiosLogin() {
    let BaseURL = 'https://nancyb3a.github.io/Test/usuarios_PGY4121_09.json';
    var f = this.formularioLogin.value;

    let api = [(await axios.get(BaseURL)).data.alumnos];
    api.forEach(res => {
      console.log(res)
      for (let i = 0; i < res.length; i++) {
        const ApiRes = res[i];

        if (f.usuario == ApiRes.username && f.pass == ApiRes.password) {

          let ApiObj = {"usuario": ApiRes.username, "pass": ApiRes.password, "nombre": ApiRes.nombre}
          localStorage.setItem('miembro', JSON.stringify(ApiObj));

          this.ingresar()
          console.log(ApiRes)
          console.log('yes')
        } else {
          this.alertController.create({
            header: 'Datos Incorrectos',
            message: 'Los datos ingresados son incorrectos.',
            buttons: ['Aceptar'],
          })
        }
      } 
    })
  }
}

/* 2.-IMP.LOGIN: SE AGREGÓ DESDE LINEA 2 A 7 */
/* 3.-IMP.LOGIN: SE AGREGÓ ESTA LINEA */
/* 4.-IMP.LOGIN: SE AGREGÓ LO QUE ESTÁ DENTRO DE () */
/* 5.-IMP.LOGIN: SE AGREGÓ DESDE LINEA 22 A 25 */
/* PARAMETROS DE LINEA 23 Y 24 SE USARAN EN: login.page.html */

/* 6.-IMP.VALID: SE AGREGÓ DESDE LINEA 31 a 48 */
/* 7.-IMP.VALID: SE AGREGÓ ESTA LINEA */

/* 8.-IMP.GUARD: SE AGREGÓ ESTA LINEA */
/* 9.-IMP.GUARD: SE AGREGÓ ESTA LINEA */
/* 10.-IMP.GUARD: SE AGREGÓ ESTA LINEA */
