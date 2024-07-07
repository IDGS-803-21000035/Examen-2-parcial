import { Component } from '@angular/core';
import { PostreService } from '../../services/postre.service';
import { IPostre } from '../../interfaces/postre';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
  listaPostres: IPostre[] = [];
  isResultadoLoaded = false;
  filterPostre = '';
  nombre = '';
  idCategoria = 0;

  constructor(private _postreService: PostreService) {
    this.cargarPostres();
  }

  cargarPostres() {
    this._postreService.getList().subscribe({
      next: (data) => {
        this.listaPostres = data.slice(0, 3); 
        this.isResultadoLoaded = true;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }
}
