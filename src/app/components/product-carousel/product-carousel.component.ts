import { Categoria } from './../../model/Categoria';
import { CategoriaService } from './../../service/categoria.service';

import { ProdutoService } from './../../service/produto.service';
import { Produto } from './../../model/Produto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.css']
})
export class ProductCarouselComponent implements OnInit {

  produto: Produto = new Produto()
  listaProdutos: Produto[]
  nomeProduto: string
  produtoSelecionado: Produto = new Produto()

  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit()
  {
    window.scroll(0,0)
    this.findAllCategorias()
    this.findAllProdutos()
  }

  findAllProdutos()
  {
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) =>{
      this.listaProdutos = resp
    })
  }

  findAllCategorias(){
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) =>{
      this.listaCategorias = resp
    })
  }

  // Abrir modal com produto selecionado

  selecionarProduto(produto: Produto){
 
    this.produtoSelecionado = produto
    
  }

  /*
   ----------  Funções do Carrinho ----------
  */

   addToCart(produto: Produto) {
    this.produtoService.addToCart(produto);
  }
  
}
