import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { GeneralModule } from '../../modules/general/general-module';
import { provideNativeDateAdapter } from '@angular/material/core';
import { NgApexchartsModule } from "ng-apexcharts";
import { GraficoDonaComponent } from '../../components/grafico-dona/grafico-dona.component';
import { AreaTrabajo } from '../../models/interfaces';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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

  registrarActividad() {
    console.log(this.actividadForm.value)
  }

}
