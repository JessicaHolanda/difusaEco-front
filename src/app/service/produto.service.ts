import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  token={
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllProduto(): Observable<Produto[]>{
    return this.http.get<Produto[]>("http://localhost:8080/produto")
  }

  getByIdProduto(id: number): Observable<Produto>{
    return this.http.get<Produto>(`http://localhost:8080/produto/${id}`)
  }

  getByNomeProduto(nome: string): Observable<Produto[]>{
    return this.http.get<Produto[]>(`http://localhost:8080/produto/produto/${nome}`)
  }

  postProduto(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>("http://localhost:8080/produto",produto, {headers: {'Authorization': environment.token}})
  }

  putProduto(produto: Produto): Observable<Produto>{
    return this.http.put<Produto>("http://localhost:8080/produto",produto, {headers: {'Authorization': environment.token}})
  }

  deleteProduto(id:number){
    return this.http.delete(`http://localhost:8080/produto/${id}`, {headers: {'Authorization': environment.token}})
  }
  
}
