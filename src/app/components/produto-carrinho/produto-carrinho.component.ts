import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Produto } from 'src/app/model/Produto';
import { ProdutoCarrinho } from 'src/app/model/Produto-Carrinho';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-produto-carrinho',
  templateUrl: './produto-carrinho.component.html',
  styleUrls: ['./produto-carrinho.component.css']
})
export class ProdutoCarrinhoComponent implements OnInit {
  produtoCarrinho: ProdutoCarrinho;


  constructor(private produtoService: ProdutoService) { }

  @Output() public removeProduct= new EventEmitter();

  ngOnInit(): void {
  }

  @Input() set produto(val: ProdutoCarrinho) {

    if (val) {
        this.produtoCarrinho = val;
    }
}

    removerProduto(produto: Produto){
      this.produtoService.removeCartProduct(produto);
      this.removeProduct.emit(true);
  }

}
