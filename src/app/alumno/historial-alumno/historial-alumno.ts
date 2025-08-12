import { Component, inject, OnInit } from '@angular/core';
import { GeneralModule } from '../../modules/general/general-module';
import { Actividad } from '../models/interfaces';
import { AlumnoService } from '../../services/alumno.service';
import { AreaTrabajo } from '../../models/interfaces';


@Component({
  selector: 'app-historial-alumno',
  imports: [GeneralModule],
  templateUrl: './historial-alumno.html',
  styleUrl: './historial-alumno.scss'
})
export class HistorialAlumno implements OnInit {

  private alumnoService: AlumnoService = inject(AlumnoService)

  actividades: Actividad[] = []
  areasTrabajo: AreaTrabajo[] = JSON.parse(localStorage.getItem('areasTrabajo') || '')
  mes: string[] = this.obtenerMesesActuales()
  mesFiltro: number | undefined = 0
  areaFiltro: string | undefined = ''

  ngOnInit(): void {
    this.obtenerActividades()
    console.log(this.mes)
  }

  obtenerActividades() {
    this.alumnoService.traerActividades().subscribe({
      next: (response: { actividades: Actividad[] }) => {
        console.log(response.actividades)
        this.actividades = response.actividades

      },
      error: (err) => {
        console.error(err)
      }
    })
  }

  obtenerMesesActuales() {
    const mesesNombres = [
      "enero", "febrero", "marzo", "abril", "mayo", "junio",
      "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];

    const fechaActual = new Date();
    const mesActual = fechaActual.getMonth(); // 0 = enero, 8 = septiembre...

    // Cortamos el arreglo desde enero (0) hasta el mes actual
    return mesesNombres.slice(0, mesActual + 1);
  };

  filtrarActividades() {
    this.alumnoService.filtrarActividades(this.mesFiltro, this.areaFiltro).subscribe({
      next: (response: { actividades: Actividad[] }) => {
        console.log(response.actividades)
        this.actividades = response.actividades

      },
      error: (err) => {
        console.error(err)
      }
    })
  }

  asignarMes(mes: number | undefined) {
    if (mes) {
      this.mesFiltro = mes + 1
    } else {
      this.mesFiltro = mes
    }

  }

  asignarArea(area: string | undefined) {
    this.areaFiltro = area
  }




}
