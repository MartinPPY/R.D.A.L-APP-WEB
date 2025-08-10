import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RegistroActividad } from './registro-actividad/registro-actividad';
import { HistorialAlumno } from './historial-alumno/historial-alumno';
import { GeneralModule } from '../modules/general/general-module';
import { AreaTrabajo } from '../models/interfaces';

@Component({
  selector: 'app-alumno',
  imports: [CommonModule, GeneralModule, RegistroActividad, HistorialAlumno],
  templateUrl: './alumno.html',
  styleUrl: './alumno.scss'
})
export class Alumno {
}
