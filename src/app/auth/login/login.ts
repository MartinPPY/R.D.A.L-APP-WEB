import { Component, inject } from '@angular/core';
import { GeneralModule } from '../../modules/general/general-module';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Alerts } from '../../components/alerts/alerts';

@Component({
  selector: 'app-login',
  imports: [GeneralModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  private formBuilder: FormBuilder = inject(FormBuilder)
  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email, Validators.minLength(10), Validators.maxLength(100)]],
    password: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]]
  })
  dialog = inject(MatDialog)
  cargando: boolean = false

  mostrarAlerta(titulo: string, mensaje: string) {
    this.dialog.open(Alerts, {
      data: {
        titulo: titulo,
        mensaje: mensaje
      }
    })
  }

  validarCampos(): boolean {

    if (this.loginForm.get('email')?.hasError) {
      this.mostrarAlerta('Ha ocurrido un error!', 'El email es invalido!')
      return false
    }

    if (this.loginForm.get('email')?.hasError) {
      this.mostrarAlerta('Ha ocurrido un error!', 'La contraseña es invalida!')
      return false
    }

    return true
  }

  logIn() {
    this.cargando= true
    if (!this.validarCampos()) {
      this.cargando= false
      return
    }
    this.cargando= false
  }



}
