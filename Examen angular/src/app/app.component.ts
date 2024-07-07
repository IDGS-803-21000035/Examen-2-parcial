import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PostreService } from './services/postre.service';
import { HttpClientModule } from '@angular/common/http';
import { PaginaInicioModule } from './pagina-inicio/pagina-inicio.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pagina-inicio/pipes/filter.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, PaginaInicioModule, HttpClientModule, FilterPipe],
  providers: [PostreService], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}



