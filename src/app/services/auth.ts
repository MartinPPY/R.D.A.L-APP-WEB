import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ruta } from './rutas';
import { LoginRequest } from '../auth/models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  private http: HttpClient = inject(HttpClient)
  private ruta: string = ruta

  login(body: LoginRequest): Observable<any> {
    return this.http.post(`${this.ruta}auth/log-in`, body, { withCredentials: true })
  }

  verifyUser(): Observable<any> {
    return this.http.get(`${ruta}auth/verify`, { withCredentials: true })
  }

}
