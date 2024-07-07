import { Component } from '@angular/core';
import { IPostre } from '../../interfaces/postre';
import { PostreService } from '../../services/postre.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {
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
        this.listaPostres = data;
        this.isResultadoLoaded = true;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  buscarPorNombre() {
    if (this.nombre === '') {
        this.cargarPostres();
        return;
    } else {
      this._postreService.buscarNombre(this.nombre).subscribe({
        next: (data) => {
          this.listaPostres = data;
          this.isResultadoLoaded = true;
        },
        error: (e) => {
          console.log(e);
        }
      });
    }
  }

  buscarPorCategoria(idCategoria: number) {
    this._postreService.buscarCategoria(idCategoria).subscribe({
      next: (data) => {
        this.listaPostres = data;
        this.isResultadoLoaded = true;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }
}