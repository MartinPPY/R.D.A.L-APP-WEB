import { Component, inject } from '@angular/core';
import { GeneralModule } from '../../modules/general/general-module';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Alerts } from '../../components/alerts/alerts';
import { LoginRequest, Payload } from '../models/interfaces';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  private formBuilder: FormBuilder = inject(FormBuilder)
  loginForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email, Validators.minLength(10), Validators.maxLength(100)]],
    password: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]]
  })
  cargando: boolean = false
  error: boolean = false
  private authService: Auth = inject(Auth)
  private router = inject(Router)

  logIn() {

    this.cargando = true
    if (this.loginForm.invalid) {
      this.error = true
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
          next: (response: { usuario: Payload }) => {
            if (response.usuario.tipoUsuario === 1) {
              this.router.navigate(['administrador'])
            } else {
              this.router.navigate(['alumno/registro-solicitud'])
            }
          },
          error: (err) => {
            this.error = true
            console.error(err)
          }
        })
        this.cargando = false

      },
      error: (err) => {
        console.error(err)
        this.error = true
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

  ocultarMsg(){
    this.error = false
  }



}
