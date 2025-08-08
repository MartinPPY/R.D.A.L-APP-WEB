import { Routes } from '@angular/router';
import { Auth } from './auth/auth';
import { Login } from './auth/login/login';
import { ForgotPassword } from './auth/forgot-password/forgot-password';
import { Alumno } from './alumno/alumno';
import { RegistroActividad } from './alumno/registro-actividad/registro-actividad';
import { HistorialAlumno } from './alumno/historial-alumno/historial-alumno';
import { SolicitudesOc } from './administrador/solicitudes-oc/solicitudes-oc';
import { HistorialAdmin } from './administrador/historial-admin/historial-admin';

export const routes: Routes = [
    { path: '', redirectTo: 'auth/log-in', pathMatch: 'full' },
    {
        path: 'auth',
        component: Auth,
        children: [
            { path: 'log-in', component: Login },
            { path: 'forgot-password', component: ForgotPassword }
        ]
    },
    {
        path: 'alumno',
        component: Alumno,
        children: [
            { path: 'registro-solicitud', component: RegistroActividad },
            { path: 'historial-alumno', component: HistorialAlumno }
        ]
    },
    {
        path: 'administrador',
        component: Alumno,
        children: [
            { path: 'solicitudes', component: SolicitudesOc },
            { path: 'historial-administrador', component: HistorialAdmin }
        ]
    },
    { path: '**', redirectTo: 'auth/log-in' }
];
