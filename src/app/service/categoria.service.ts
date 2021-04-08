import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(
    private http: HttpClient
  ) { }

  getAllCategoria(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>('http://localhost:8080/categoria')
  }

  getByIdCategoria(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(`http://localhost:8080/categoria/${id}`)
  }

  getByNomeCategoria(nome: string): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`http://localhost:8080/categoria/${nome}`)
  }

  postCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>('http://localhost:8080/categoria', categoria)
  }

  putCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>('http://localhost:8080/categoria', categoria)
  }

  deleteCategoria(id: number) {
    return this.http.delete(`http://localhost:8080/categoria/${id}`)
  }

}
