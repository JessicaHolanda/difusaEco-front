import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ProdutosComponent } from './produtos/produtos.component';

const routes: Routes = [

  {path: '', redirectTo: 'landingpage', pathMatch: 'full'},

  {path: 'landingpage', component: LandingpageComponent},
  {path: 'produtos', component: ProdutosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
