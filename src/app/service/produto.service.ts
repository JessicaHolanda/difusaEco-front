import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../model/Produto';
import { ProdutoCarrinho } from '../model/Produto-Carrinho';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

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

  addToCart(produto: Produto) {
        
    const carrinho: ProdutoCarrinho[] = JSON.parse(localStorage.getItem('carrinho') || '[]');
    
    const produtoCarrinho: ProdutoCarrinho = { 
      qtd: 1, 
      produto: produto,
      totalProduto: produto.preco
    }

    carrinho.push(produtoCarrinho);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
  }


  getProdutosCarrinho():ProdutoCarrinho[] {
    const carrinho: ProdutoCarrinho[] = JSON.parse(localStorage.getItem('carrinho') || '[]');
    return carrinho;
  }

  removeCartProduct(produto: Produto){
    let carrinho: ProdutoCarrinho[] = JSON.parse(localStorage.getItem('carrinho') || '[]');

    carrinho = carrinho.filter((item) => item.produto.id !== produto.id);

    alert("Registro excluído");

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
  }
}
