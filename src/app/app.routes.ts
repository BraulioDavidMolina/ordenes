import { Routes } from '@angular/router';
import { OrdenesComponent } from './pages/ordenes/ordenes.component';
import { HomeComponent } from './pages/home/home.component';
import { MakeordenComponent } from './pages/makeorden/makeorden.component';

export const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'ordenes', component: OrdenesComponent },
    { path: 'makeorden', component: MakeordenComponent },
    { path: '**', redirectTo: 'home' }

];
