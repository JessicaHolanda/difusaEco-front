import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { Produto } from 'src/app/model/Produto';
import { Usuario } from 'src/app/model/Usuario';
import { AuthService } from 'src/app/service/auth.service';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ProdutoService } from 'src/app/service/produto.service';
import Swal from 'sweetalert2';



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
      Swal.fire(
        'Cadastrado',
        'Sua categoria foi cadastrada com sucesso',
        'success'  
      )
      this.categoria = new Categoria()
      this.getAllCategorias()
        })
  }
  
  getAllCategorias(){
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[])=>{
      this.listaCategorias = resp
      console.log(this.listaCategorias)
    })
  }

  findByIdCategoria(){
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria)=>{
    this.categoria = resp
  })
  }

  selecionarCategoria(id: number){
    this.categoriaService.getByIdCategoria(id).subscribe((resp: Categoria)=>{
    this.categoriaSelecionada = resp
  })
    console.log(this.categoriaSelecionada)
  }

  editarCategoria(){
    Swal.fire({
      title: 'Você tem certeza que deseja editar essa Categoria?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim',
      cancelButtonText:'Não'
    }).then((result) => {
      if (result.isConfirmed) {
      this.categoriaService.putCategoria(this.categoriaSelecionada).subscribe((resp: Categoria)=>{
      this.categoriaSelecionada = resp
      this.getAllCategorias()
      })
        Swal.fire(
          'Editado',
          'O usuário foi Editado',
          'success'
        )       
      } 
    })
  }

  cancelCategoria(){
    this.categoria = new Categoria()
  }

  apagarCategoria(id: number){
    try{
       Swal.fire({
         title: 'Você tem certeza que deseja apagar essa categoria?',
         text: "Você não poderá reverter isto",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Sim',
         cancelButtonText:'Não'
       }).then((result) => {
         if (result.isConfirmed) {
          this.categoriaService.deleteCategoria(id).subscribe(()=>{
           this.getAllCategorias() 
          }) 
          Swal.fire(
            'Deletado',
            'A categoria foi deletada',
            'success'
           )   
         }
         
       })  
          
     }catch(error){
      console.log(error.message)
     }

  }
  /* FUNÇÕES CATEGORIA FIM */



  /* FUNÇÕES PRODUTO INICIO */
  cadastrarProduto(){
    this.categoria.id = this.idCategoria
    this.produto.categoria = this.categoria
    this.produtoService.postProduto(this.produto).subscribe((resp: Produto)=>{
      this.produto = resp
      Swal.fire(
        'Cadastrado',
        'Sua produto foi cadastrado com sucesso',
        'success'
      )
      this.produto = new Produto()
      this.getAllProdutos()
      })
  }
  
  getAllProdutos(){
    this.produtoService.getAllProduto().subscribe((resp: Produto[])=>{
      this.listaProdutos = resp
    })
  }

  selecionarProduto(id: number){
    
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto)=>{
      this.produtoSelecionado = resp
    })
  }

  editarProduto(){
    this.categoria.id = this.idCategoria
    this.produtoSelecionado.categoria = this.categoria
    Swal.fire({
      title: 'Você tem certeza que deseja editar esse Produto?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim',
      cancelButtonText:'Não'
    }).then((result) => {
      if (result.isConfirmed) {
      this.produtoService.putProduto(this.produtoSelecionado).subscribe((resp: Produto)=>{
      this.produtoSelecionado = resp
      this.getAllProdutos()
      })
        Swal.fire(
          'Editado',
          'O usuário foi Editado',
          'success'
        )       
      } 
    })
  }

  cancelProduto(){
    this.produto = new Produto()
  }

  apagarProduto(id: number){
    try{
      Swal.fire({
         title: 'Você tem certeza que deseja apagar esse produto?',
         text: "Você não poderá reverter isto",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Sim',
         cancelButtonText:'Não'
       }).then((result) => {
         if (result.isConfirmed) {
           this.produtoService.deleteProduto(id).subscribe(()=>{
            this.getAllProdutos()
           })
           
           Swal.fire(
             'Deletado',
             'O Produto foi deletado',
             'success' 
           )      
         }
          
        
       })      
     }catch(error){
       console.log(error.message)
     }
  }
  /* FUNÇÕES PRODUTO FIM */



  /* FUNÇÕES USUARIO INICIO*/

  cadastrarUsuario(){
  
    this.authService.cadastrar(this.usuario).subscribe((resp: Usuario)=>{
      this.usuario = resp
      Swal.fire(
        'Cadastrado',
        'Sua usuário foi cadastrada com sucesso',
        'success'
      )
      this.usuario = new Usuario()
      this.getAllUsuarios()
      })
  }

  getAllUsuarios(){
    this.authService.getAllUsuarios().subscribe((resp: Usuario[])=>{
      this.listaUsuarios = resp
    })
  }

  selecionarUsuario(id: number){
    this.authService.findByIdUsuario(id).subscribe((resp: Usuario)=>{
      this.usuarioSelecionado = resp
    })
  }

  async editarUsuario(){
    await Swal.fire({
      title: 'Você tem certeza que deseja editar esse usuário?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim',
      cancelButtonText:'Não'
    }).then((result) => {
      if (result.isConfirmed) {
      this.authService.editarUsuario(this.usuarioSelecionado).subscribe((resp: Usuario)=>{
      this.usuarioSelecionado = resp
      this.getAllUsuarios()
      this.usuario = new Usuario 
      })
        Swal.fire(
          'Editado',
          'O usuário foi Editado',
          'success'
        ) 
              
      }
      
    })
  }

  cancelUsuario(){
    this.usuario = new Usuario
  }

  async apagarUsuario(id: number){
    try{
     await Swal.fire({
        title: 'Você tem certeza que deseja apagar esse usuário?',
        text: "Você não poderá reverter isto",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim',
        cancelButtonText:'Não'
      }).then((result) => {
        if (result.isConfirmed) {
          this.authService.deleteUsuario(id).subscribe(()=>{
            this.usuario = new Usuario()
            this.getAllUsuarios()
          })
          Swal.fire(
            'Deletado',
            'O usuário foi deletado',
            'success'
          )       
        }
        
      })     
      
    }catch(error){
      console.log(error.message)
    }
    
  }

  confirmeSenha(event: any) {
    this.confirmarSenha = event.target.value
  }
}
  /* FUNÇÕES USUARIO FIM*/

