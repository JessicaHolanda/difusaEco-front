import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/Produto';
import { ProdutoCarrinho } from 'src/app/model/Produto-Carrinho';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  produtosCarrinho: ProdutoCarrinho[];

  constructor(private produtoService: ProdutoService) { }

 
  ngOnInit() {
    this.getProdutoCarrinho();
  }

  getProdutoCarrinho(){
    this.produtosCarrinho = this.produtoService.getProdutosCarrinho();
    console.log(this.produtosCarrinho.length)
  }

}
