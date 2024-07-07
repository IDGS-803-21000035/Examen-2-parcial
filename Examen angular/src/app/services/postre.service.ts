import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPostre } from '../interfaces/postre';

@Injectable({
  providedIn: 'root'
})
export class PostreService {

  private _endpoint: string = environment.endPoint;
  private _apiUrl: string = this._endpoint + "Postres/";

  constructor(private http: HttpClient) { }

  // ------ GET DE LISTA DE POSTRES -------------
  getList(): Observable<IPostre[]>{
    return this.http.get<IPostre[]>(`${this._apiUrl}Postres`);
  }

  buscarNombre(nombre: string): Observable<IPostre[]>{
    return this.http.get<IPostre[]>(`${this._apiUrl}BuscarPorNombre?nombre=${nombre}`);
  }

  buscarCategoria(id: number): Observable<IPostre[]>{
    return this.http.get<IPostre[]>(`${this._apiUrl}BuscarPorCategoria?idCategoria=${id}`);
  }
}

  

  

