import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  getAllProduto(){
    return this.http.get("http://localhost:8080/produto")
  }

  findByIdProduto(id: number): Observable<Produto>{
    return this.http.get<Produto>(`http://localhost:8080/produto/${id}`)
  }

  postProduto(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>("http://localhost:8080/produto",produto)
  }

  putProduto(produto: Produto): Observable<Produto>{
    return this.http.put<Produto>("http://localhost:8080/produto",produto)
  }

  deleteProduto(id:number){
    return this.http.delete(`http://localhost:8080/produto/${id}`)
  }
}
