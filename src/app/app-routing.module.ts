import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmComponent } from './pages/adm/adm.component';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { SobreProjetoComponent } from './pages/sobre-projeto/sobre-projeto.component';

const routes: Routes = [

  {path: '', redirectTo: 'landingpage', pathMatch: 'full'},

  {path: 'landingpage', component: LandingpageComponent},
  {path: 'produtos', component: ProdutosComponent},
  {path: 'sobre-projeto', component: SobreProjetoComponent},
  {path: 'adm', component: AdmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
