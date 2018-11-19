import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListagemPessoasComponent } from './listagem-pessoas/listagem-pessoas.component';
import { PessoaService } from './service/pessoa.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CadastroPessoasComponent } from './cadastro-pessoas/cadastro-pessoas.component';


@NgModule({
  declarations: [
    AppComponent,
    ListagemPessoasComponent,
    CadastroPessoasComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [PessoaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
