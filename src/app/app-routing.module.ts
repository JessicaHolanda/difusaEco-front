import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdmComponent } from './pages/adm/adm.component';

import { LoginComponent } from './components/login/login.component';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { SobreProjetoComponent } from './pages/sobre-projeto/sobre-projeto.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';

const routes: Routes = [

  {path: '', redirectTo: 'home', pathMatch: 'full'},

  {path: 'home', component: LandingpageComponent},
  {path: 'produtos', component: ProdutosComponent},
  {path: 'sobre-projeto', component: SobreProjetoComponent},
<<<<<<< HEAD
  {path: 'carrinho', component: CarrinhoComponent},


=======
>>>>>>> be22c9ba219c9675d6490fe1eca77cd29c7952a8
  {path: 'adm', component: AdmComponent},
  {path: 'login', component: LoginComponent}
<<<<<<< HEAD


=======
>>>>>>> be22c9ba219c9675d6490fe1eca77cd29c7952a8
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
