import { Categoria } from './../../model/Categoria';
import { CategoriaService } from './../../service/categoria.service';

import { Produto } from './../../model/Produto';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produto: Produto = new Produto()
  listaProdutos: Produto[]
  idProduto: number
  nomeProduto: string

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

  findProdutoByID()
  {
    this.produtoService.getByIdProduto(this.idProduto).subscribe((resp: Produto) => {
      this.produto = resp;
    })
  }

  findProdutoByNome()
  {
    if(this.nomeProduto == '')
    {
      this.findAllProdutos()
    }
    else
    {
      this.produtoService.getByNomeProduto(this.nomeProduto).subscribe((resp: Produto[]) => {
        this.listaProdutos = resp;
      })
    }
  }
}
