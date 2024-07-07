import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal/principal.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PostreService } from '../services/postre.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    PrincipalComponent,
    GaleriaComponent,
    ContactoComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    FilterPipe
  ],
  exports: [
    GaleriaComponent,
    ContactoComponent,
    PrincipalComponent
  ],
  providers:[
    PostreService
  ]
})
export class PaginaInicioModule { }

