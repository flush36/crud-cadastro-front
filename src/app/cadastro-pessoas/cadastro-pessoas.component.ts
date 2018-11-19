import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../service/pessoa.service';
import { Pessoa } from '../models/pessoa';
import { Telefone } from '../models/telefone';

@Component({
  selector: 'app-cadastro-pessoas',
  templateUrl: './cadastro-pessoas.component.html',
  styleUrls: ['./cadastro-pessoas.component.css']
})
export class CadastroPessoasComponent implements OnInit {

  constructor(private service: PessoaService) { }

  pessoa: Pessoa;
  telefone: Telefone;
  telefones = [];



  ngOnInit() {
   this.pessoa = new Pessoa();
   this.telefone = new Telefone();
  }

  salvarNaLista() {
    this.telefones.push(this.telefone);
    this.telefone = new Telefone();
  }

  deletarDaLista(index) {
    this.telefones.splice(index,1);
  }

  cadastrar() {
    this.pessoa.telefones = this.telefones;
    this.service.cadastrar(this.pessoa).subscribe(() => {
      this.pessoa = new Pessoa();
    }, error => {
      console.log(error);
    })
  }

}
