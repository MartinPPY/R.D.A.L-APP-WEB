import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { GeneralModule } from '../../modules/general/general-module';
import { provideNativeDateAdapter } from '@angular/material/core';
import { NgApexchartsModule } from "ng-apexcharts";
import { GraficoDonaComponent } from '../../components/grafico-dona/grafico-dona.component';
import { AreaTrabajo } from '../../models/interfaces';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActividadAMandar } from '../models/interfaces';
import { AlumnoService } from '../../services/alumno.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-registro-actividad',
  standalone: true,
  imports: [CommonModule, GeneralModule, NgApexchartsModule, GraficoDonaComponent, ReactiveFormsModule],
  templateUrl: './registro-actividad.html',
  styleUrls: ['./registro-actividad.scss'],
  providers: [provideNativeDateAdapter()]
})
export class RegistroActividad {

  areasTrabajo: AreaTrabajo[] = JSON.parse(localStorage.getItem('areasTrabajo') || '')

  private fb: FormBuilder = inject(FormBuilder)

  actividadForm: FormGroup = this.fb.group({
    fecha: ['', Validators.required],
    horaInicio: ['', Validators.required],
    horaTermino: ['', Validators.required],
    areaTrabajo: ['', Validators.required]
  })

  private alumnoService: AlumnoService = inject(AlumnoService)
  private snackBar = inject(MatSnackBar)

  registrarActividad() {
    const idArea: number = parseInt(this.actividadForm.get('areaTrabajo')!.value)
    console.log(this.actividadForm.value)

    const actividad: ActividadAMandar = {
      areaTrabajo: idArea,
      fecha: this.actividadForm.get('fecha')?.value,
      horaInicio: this.actividadForm.get('horaInicio')?.value,
      horaTermino: this.actividadForm.get('horaTermino')?.value,
    }

    this.alumnoService.registrarActividad(actividad).subscribe({
      next: (response: { message: string }) => {
        console.log(response.message)
        this.snackBar.open(response.message, 'Deshacer', {
          duration: 3000,
          verticalPosition: 'top'
        })
        this.actividadForm.reset()
      },
      error: (err: any) => {
        console.error(err)
      }
    })




  }

}
