import { Component, Input, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/Produto';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-produto-carrinho',
  templateUrl: './produto-carrinho.component.html',
  styleUrls: ['./produto-carrinho.component.css']
})
export class ProdutoCarrinhoComponent implements OnInit {
  produtoCarrinho: Produto;


  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
  }

  @Input() set produto(val: Produto) {

    if (val) {
        this.produtoCarrinho = val;
    }
}

}
