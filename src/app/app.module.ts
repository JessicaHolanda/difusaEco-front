import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { SobreProjetoComponent } from './pages/sobre-projeto/sobre-projeto.component';
import { CardMemberComponent } from './components/card-member/card-member.component';
import { HttpClientModule } from '@angular/common/http';
import { ProdutoComponent } from './components/produto/produto.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdmComponent } from './pages/adm/adm.component';
import { HeaderAdmComponent } from './components/header-adm/header-adm.component';

import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { ProdutoCarrinhoComponent } from './components/produto-carrinho/produto-carrinho.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingpageComponent,
    ProdutosComponent,
    SobreProjetoComponent,
    CardMemberComponent,
    ProdutoComponent,
    ProdutoCarrinhoComponent,

    AdmComponent,
    HeaderAdmComponent,
    LoginComponent,
    CarrinhoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
