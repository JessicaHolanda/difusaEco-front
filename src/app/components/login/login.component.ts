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
  loginOk: boolean = false

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    this.getAllUsuarios()
  }

  confirmeSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  cadastrar() {
    this.user.tipoUsuario = this.tipoUsuario
    
    if (this.user.senha != this.confirmarSenha) {
      alert("Senhas não conferem. Favor digitar novamente.")
    } else {
      this.authService.cadastrar(this.user).subscribe((resp: Usuario) => {
        this.user = resp
        alert("Cadastro realizado com sucesso. Bem vinde! Realize login.")
      })
    }

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

      if(this.userLogin.tipoUsuario == "normal"){
        $('#modalLogin').hide()
      $('.modal-backdrop').hide()
      alert("Welcome!")
      } else {
        this.router.navigate(['/adm'])
      }
      

    } , err => {

      if(err.status == 401) {
        alert('Por gentileza, verifique se o e-mail e a senha foram digitados corretamente.')
     
   }
    })
  }


}
