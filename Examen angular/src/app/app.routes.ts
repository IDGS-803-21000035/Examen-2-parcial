import { Routes } from '@angular/router';
import { PrincipalComponent } from './pagina-inicio/principal/principal.component';
import { GaleriaComponent } from './pagina-inicio/galeria/galeria.component';
import { ContactoComponent } from './pagina-inicio/contacto/contacto.component';

export const routes: Routes = [
    {path: 'inicio', component: PrincipalComponent},
    {path: 'deserts', component: GaleriaComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: '', redirectTo: '/inicio', pathMatch: 'full'},
];
