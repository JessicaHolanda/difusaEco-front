import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/model/UserLogin';
import { Usuario } from 'src/app/model/Usuario';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Usuario = new Usuario

  userLista: Usuario[]
  confirmarSenha: string
  tipoUsuario: string = "normal"
  userLogin: UserLogin = new UserLogin

  // Confirmação de Dados
  nomeValido: boolean = false;
  emailValido: boolean = false;
  senhaValida: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  getAllUsuarios() {
    this.authService.getAllUsuarios().subscribe((resp: Usuario[]) => {
      this.userLista = resp
      console.log(this.userLista)
    })
  }

  verificarLogin(){
    this.authService.logar(this.userLogin).subscribe((resp: UserLogin) => {
      console.log(resp)
    })
  }

  logar() {

    this.authService.logar(this.userLogin).subscribe((resp: UserLogin) => {
      this.userLogin = resp

      environment.token = this.userLogin.token
      environment.nomeUsuario = this.userLogin.nomeUsuario
      environment.id = this.userLogin.id
      environment.tipoUsuario = this.userLogin.tipoUsuario

      $('#modalLogin').hide()

      $('#modalLogin').hide()

      $('.modal-backdrop').hide()
      alert("Welcome!")      

    } , err => {

      if(err.status == 401) {
        alert('Por gentileza, verifique se o e-mail e a senha foram digitados corretamente.')
     
   }

   if(err.status == 500) {
    alert('Por gentileza, verifique se o e-mail e a senha foram digitados corretamente.')
  }

    })
  }

  // Validação de Dados

  validaNome(event: any){
    this.nomeValido = this.validation(event.target.value.length < 3, event);
  }

  validaEmail(event: any){
    this.emailValido = this.validation(event.target.value.indexOf('@') == -1 || event.target.value.indexOf('.') == -1, event);
  }

  validaSenha(event: any){
    this.senhaValida = this.validation(event.target.value.length < 5, event)
  }

  confirmSenha(event: any){
    this.confirmarSenha = event.target.value;
     this.senhaValida = this.validation(this.confirmarSenha != this.user.senha, event)
  }

  validation(condicao: boolean, event:any){
    let valid = false;
    if(condicao){
      event.target.classList.remove("is-valid");
      event.target.classList.add("is-invalid");
    }else{
      event.target.classList.remove("is-invalid");
      event.target.classList.add("is-valid");
      valid = true;
    }
    return valid;
  }

  cadastrar() {
    this.user.tipoUsuario = this.tipoUsuario;

    if (this.user.senha != this.confirmarSenha) {

      this.confirmSenha;
      
      alert("Por favor, verifique novamente as senhas digitadas.")
    } else if (this.nomeValido && this.emailValido && this.senhaValida) {
      this.authService.cadastrar(this.user).subscribe((resp: Usuario) => {
        this.user = resp
        alert("Cadastro realizado com sucesso. Bem vinde! Realize login.")
      })
    }

  }


}
