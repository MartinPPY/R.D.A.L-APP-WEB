import { Routes } from '@angular/router';
import { Auth } from './auth/auth';
import { Login } from './auth/login/login';
import { ForgotPassword } from './auth/forgot-password/forgot-password';

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
    { path: '**', redirectTo: 'auth/log-in' }
];
