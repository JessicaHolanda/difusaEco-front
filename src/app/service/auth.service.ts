import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../model/UserLogin';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  post(usuario: Usuario) {
    throw new Error('Method not implemented.');
  }

  constructor(
    private http: HttpClient
  ) { }
  
  

  logar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('http://localhost:8080/usuarios/logar',userLogin)
  }

  cadastrar(user: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>('http://localhost:8080/usuarios/cadastrar',user)
  }

  getAllUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>('http://localhost:8080/usuarios')
  }

  editarUsuario(user: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>('http://localhost:8080/usuarios',user)
  }

  deleteUsuario(id: number){
    
    return this.http.delete(`http://localhost:8080/usuarios/${id}`).toPromise()
  }
  

}
