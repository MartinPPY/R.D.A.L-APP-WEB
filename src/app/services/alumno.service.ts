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

  filtrarActividades(mes: number | boolean, area: string | boolean): Observable<any> {
    let params = new HttpParams()
    .set('area',area)
    .set('mes',mes)
    return this.http.get(`${ruta}alumno/actividades-filtradas`, { params, withCredentials: true })
  }

  traerResumenMensual():Observable<any>{
    return this.http.get(`${ruta}alumno/resumen-mensual`, {withCredentials: true })
  }

}
