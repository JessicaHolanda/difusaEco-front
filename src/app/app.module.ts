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
import { AdmComponent } from './pages/adm/adm.component';
import { HeaderAdmComponent } from './components/header-adm/header-adm.component';

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
    AdmComponent,
    HeaderAdmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
