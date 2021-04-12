import { ProdutoService } from 'src/app/service/produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public qtdCarrinho: number;

  constructor(public produtoService: ProdutoService) { }

  ngOnInit() {
    this.getQtdCarrinho()
  }

  getQtdCarrinho(){
    this.qtdCarrinho = this.produtoService.getProdutosCarrinho().length;
    console.log(this.qtdCarrinho);
  }

}
