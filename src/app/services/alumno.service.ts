import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ruta } from './rutas';
import { Observable } from 'rxjs';
import { ActividadAMandar } from '../alumno/models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private http: HttpClient = inject(HttpClient)
  private ruta: string = ruta

  registrarActividad(body: ActividadAMandar): Observable<any> {
    return this.http.post(`${ruta}alumno/registrar-actividad`, body, { withCredentials: true })
  }

  traerActividades(): Observable<any> {
    return this.http.get(`${ruta}alumno/actividades`, { withCredentials: true })
  }

  filtrarActividades(mes: number | undefined, area: string | undefined): Observable<any> {
    let params = new HttpParams()

    if (!mes) {
      params = params.set('mes', false)
    } else {
      params = params.set('mes', mes)
    }

    if (!area) {
      params = params.set('area', false)
    } else {
      params = params.set('area', area)
    }

    return this.http.get(`${ruta}alumno/actividades-filtradas`, { params, withCredentials: true })
  }

}
