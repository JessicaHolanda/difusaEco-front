import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { Produto } from 'src/app/model/Produto';
import { Usuario } from 'src/app/model/Usuario';
import { AuthService } from 'src/app/service/auth.service';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ProdutoService } from 'src/app/service/produto.service';



@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.css']
})
export class AdmComponent implements OnInit {


  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[] 
  ativo: boolean = false
  categoriaSelecionada: Categoria = new Categoria()
  idCategoria: number

  produto: Produto = new Produto()
  listaProdutos: Produto[]
  produtoSelecionado: Produto = new Produto()

  usuario: Usuario = new Usuario
  listaUsuarios: Usuario[]
  usuarioSelecionado: Usuario = new Usuario()
  confirmarSenha: string
  idUsuario: number


  constructor(
    private router: Router,
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService,
    private authService: AuthService,
    private route: ActivatedRoute
     

  ) { }
  
  ngOnInit() {

    let id = this.route.snapshot.params['id']
    
    this.getAllCategorias()
    this.getAllProdutos()
    this.getAllUsuarios()
  }

  

  /* FUNÇÕES CATEGORIA INICIO */
  cadastrarCategoria(){
    this.categoria.ativo = this.ativo
    this.categoriaService.postCategoria(this.categoria).subscribe((resp: Categoria)=>{
      this.categoria = resp
      alert('Categoria cadastrada com sucesso')
      this.categoria = new Categoria()
      this.getAllCategorias
        })
  }
  
  getAllCategorias(){
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[])=>{
      this.listaCategorias = resp
    })
  }

  findByIdCategoria(){
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria)=>
    this.categoria = resp)
  }

  selecionarCategoria(categoria: Categoria){
    this.categoriaSelecionada = categoria
    console.log(this.categoriaSelecionada)
  }

  editarCategoria(){
    this.categoriaService.putCategoria(this.categoriaSelecionada).subscribe((resp: Categoria)=>{
      this.categoriaSelecionada = resp
      this.getAllCategorias()
      
    })
  }

  apagarCategoria(id: number){
    if(confirm("Tem certeza que deseja apagar essa categoria?")){
      try{
        this.categoriaService.deleteCategoria(id)
        alert("categoria apagada")
        this.getAllCategorias
            
      }catch(error){
        console.log(error.message)
      }
    } 

  }
  /* FUNÇÕES CATEGORIA FIM */

  /* FUNÇÕES PRODUTO INICIO */
  cadastrarProduto(){
    this.categoria.id = this.idCategoria
    this.produto.categoria = this.categoria
    this.produtoService.postProduto(this.produto).subscribe((resp: Produto)=>{
      this.produto = resp
      alert('Produto cadastrado com sucesso')
      this.produto = new Produto()
      this.getAllProdutos()
        })
  }
  
  getAllProdutos(){
    this.produtoService.getAllProduto().subscribe((resp: Produto[])=>{
      this.listaProdutos = resp
    })
  }

  selecionarProduto(produto: Produto){
    this.produtoSelecionado = produto
    console.log(this.produtoSelecionado)
  }

  editarProduto(){
    this.categoria.id = this.idCategoria
    this.produto.categoria = this.categoria

    this.produtoService.putProduto(this.produtoSelecionado).subscribe((resp: Produto)=>{
      this.produtoSelecionado = resp
      this.getAllProdutos()
      
    })
  }

  apagarProduto(id: number){
    if(confirm("Tem certeza que deseja apagar esse Produto?")){
      try{
        this.produtoService.deleteProduto(id)
        alert("Produto apagado")
        this.getAllProdutos
            
      }catch(error){
        console.log(error.message)
      }
    } 
  }
  /* FUNÇÕES PRODUTO FIM */

/* FUNÇÕES USUARIO INICIO*/

cadastrarUsuario(){
  /*this.categoria.id = this.idCategoria
  this.produto.categoria = this.categoria*/
  this.authService.cadastrar(this.usuario).subscribe((resp: Usuario)=>{
    this.usuario = resp
    alert('Usuario cadastrado com sucesso')
    this.usuario = new Usuario()
    this.getAllUsuarios
      })
}

getAllUsuarios(){
  this.authService.getAllUsuarios().subscribe((resp: Usuario[])=>{
    this.listaUsuarios = resp
  })
}

selecionarUsuario(usuario: Usuario){
  this.usuarioSelecionado = usuario
  console.log(this.usuarioSelecionado)
}

editarUsuario(){
  /*this.categoria.id = this.idCategoria
  this.produto.categoria = this.categoria*/

  this.authService.editarUsuario(this.usuarioSelecionado).subscribe((resp: Usuario)=>{
    this.usuarioSelecionado = resp
    this.getAllUsuarios()
    
  })
}

async apagarUsuario(id: number){
  
  if(confirm("Tem certeza que deseja apagar esse Usuario?")){
    try{
      await this.authService.deleteUsuario(id)
      alert("Usuario apagado")
      this.getAllUsuarios()
          
    }catch(error){
      console.log(error.message)
    }
  } 
}

confirmeSenha(event: any) {
  this.confirmarSenha = event.target.value
}

/* FUNÇÕES USUARIO FIM*/
}
