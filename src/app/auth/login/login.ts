import { Component, inject, signal } from '@angular/core';
import { GeneralModule } from '../../modules/general/general-module';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Alerts } from '../../components/alerts/alerts';
import { LoginRequest, LoginResponse, Payload } from '../models/interfaces';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, GeneralModule],
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
  private authService: Auth = inject(Auth)
  private router = inject(Router)
  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  logIn() {

    this.cargando = true
    if (this.loginForm.invalid) {
      this.cargando = false
      return
    }

    const body: LoginRequest = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value
    }

    this.authService.login(body).subscribe({

      next: (response: LoginResponse) => {
        localStorage.setItem('areasTrabajo', JSON.stringify(response.areasTrabajo))
        this.authService.verifyUser().subscribe({
          next: (response: { usuario: Payload }) => {
            if (response.usuario.tipoUsuario === 1) {
              this.router.navigate(['administrador'])
            } else {
              this.router.navigate(['alumno/registro-solicitud'])
            }
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
    if (this.loginForm.get(campo)?.hasError(error) && this.loginForm.get(campo)?.touched) {
      return true
    }
    return false
  }



}
