import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListagemPessoasComponent } from './listagem-pessoas/listagem-pessoas.component';
import { PessoaService } from './service/pessoa.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CadastroPessoasComponent } from './cadastro-pessoas/cadastro-pessoas.component';
import { RouterModule, Routes} from '@angular/router';

const rotas : Routes = [
  {path : 'pessoas', component: ListagemPessoasComponent},
  {path : 'pessoas/cadastrar', component: CadastroPessoasComponent},
  {path : 'pessoas/atualizar/:id', component: CadastroPessoasComponent},
  {path : '', redirectTo: 'pessoas', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ListagemPessoasComponent,
    CadastroPessoasComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(rotas)
  ],
  providers: [PessoaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
