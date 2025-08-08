import { Component, inject } from '@angular/core';
import { GeneralModule } from '../../modules/general/general-module';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Alerts } from '../../components/alerts/alerts';
import { LoginRequest } from '../models/interfaces';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [GeneralModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  private formBuilder: FormBuilder = inject(FormBuilder)
  loginForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email, Validators.minLength(10), Validators.maxLength(100)]],
    password: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]]
  })
  private dialog = inject(MatDialog)
  cargando: boolean = false
  private authService: Auth = inject(Auth)

  mostrarAlerta(titulo: string, mensaje: string) {
    this.dialog.open(Alerts, {
      data: {
        titulo: titulo,
        mensaje: mensaje
      }
    })
  }

  logIn() {

    this.cargando = true
    if (this.loginForm.invalid) {
      this.mostrarAlerta('Error!', 'Revisa tus credenciales de acceso')
      this.cargando = false
      return
    }

    const body: LoginRequest = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value
    }

    this.authService.login(body).subscribe({

      next: (response: any) => {

        this.authService.verifyUser().subscribe({
          next: (response) => {
            console.log(response)
          },
          error: (err) => {
            console.error(err)
          }
        })
        this.cargando = false
        
      },
      error: (err) => {
        console.error(err)
        this.cargando = false
      }

    })
  }

  hasError(campo: string, error: string): boolean {
    if (this.loginForm.get(campo)?.hasError(error)) {
      return true
    }
    return false
  }



}
