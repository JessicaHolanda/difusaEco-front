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
<<<<<<< HEAD
import { ProdutoComponent } from './components/produto/produto.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
=======
>>>>>>> be22c9ba219c9675d6490fe1eca77cd29c7952a8
import { AdmComponent } from './pages/adm/adm.component';
import { HeaderAdmComponent } from './components/header-adm/header-adm.component';

import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { ProdutoCarrinhoComponent } from './components/produto-carrinho/produto-carrinho.component';

=======
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductCarouselComponent } from './components/product-carousel/product-carousel.component';
import { OrderModule } from 'ngx-order-pipe';
>>>>>>> be22c9ba219c9675d6490fe1eca77cd29c7952a8


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingpageComponent,
    ProdutosComponent,
    SobreProjetoComponent,
    CardMemberComponent,
<<<<<<< HEAD
    ProdutoComponent,
    ProdutoCarrinhoComponent,

    AdmComponent,
    HeaderAdmComponent,
    LoginComponent,
    CarrinhoComponent,

=======
    AdmComponent,
    HeaderAdmComponent,
    LoginComponent,
    ProductCarouselComponent,
>>>>>>> be22c9ba219c9675d6490fe1eca77cd29c7952a8
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
