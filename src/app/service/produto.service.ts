import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  public carrinho: Produto[] = [];

  constructor(private http: HttpClient) { }

  getAllProduto():Observable<Produto[]>
  {
    return this.http.get<Produto[]>("http://localhost:8080/produto")
  }

  getByIdProduto(id: number): Observable<Produto>{
    return this.http.get<Produto>(`http://localhost:8080/produto/${id}`)
  }

  getByNomeProduto(nome: string): Observable<Produto[]>{
    return this.http.get<Produto[]>(`http://localhost:8080/produto/produto/${nome}`)
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


  /*
   ----------  Funções do Carrinho ----------
  */

    addToCart(produtoCarrinho: Produto): void {
      this.carrinho.push(produtoCarrinho);
   }

   getProdutosCarrinho():Produto[] {
      return this.carrinho;
   }

}
