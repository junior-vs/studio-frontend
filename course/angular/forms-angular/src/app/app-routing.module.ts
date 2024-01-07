import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { SucessoCadastroComponent } from './components/sucesso-cadastro/sucesso-cadastro.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'cadastro',
  },
  {
    path:'cadastro',
    component: CadastroComponent
  },
  {
    path:'sucesso',
    component: SucessoCadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}