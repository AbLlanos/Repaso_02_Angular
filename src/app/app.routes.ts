import { Routes } from '@angular/router';
import { Registro } from './components/registro/registro';
import { Login } from './components/login/login';

export const routes: Routes = [

    {path: "registro", component: Registro},
    {path: "login", component: Login}

];
