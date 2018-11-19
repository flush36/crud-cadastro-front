import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../service/pessoa.service';
import { Pessoa } from '../models/pessoa';
import { Telefone } from '../models/telefone';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro-pessoas',
  templateUrl: './cadastro-pessoas.component.html',
  styleUrls: ['./cadastro-pessoas.component.css']
})
export class CadastroPessoasComponent implements OnInit {

  constructor(
    private service: PessoaService,
    private router: Router,
    private activated : ActivatedRoute,) { }

  pessoa: Pessoa;
  telefone: Telefone;
  telefones = [];
  error: boolean;
  btn: boolean = false;
  bb: boolean = true;
  titulo:String = 'Cadastro de Pessoa';

  ngOnInit() {
   const id = this.activated.snapshot.params['id'];
   this.verificarAtualizar(id);
   this.pessoa = new Pessoa();
   this.telefone = new Telefone();
  }

  verificarAtualizar(id) {
    if(id != null) {
      this.btn = true;
      this.titulo = 'Editar dados de Pessoa';
      this.buscarPorId(id);
    }
  }

  inicio(){
    this.router.navigate(['/pessoas']);
  }

  buscarPorId(id) {
    this.service.buscarPorId(id).subscribe(pessoa => {
      this.pessoa = pessoa.json();
    }, error => {
      console.log(error)
    });
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
      this.error = false;
    }, error => {
      this.error = true;
      console.log(error);
    })
  }

  verificaIntegridadeTelefone(): Boolean {
    if(this.telefone.ddd == undefined || this.telefone.ddd == ''
      || this.telefone.numero == undefined || this.telefone.numero == '' ) {
      return true;
    }
    return false;
  }

  verificaIntegridadePessoa(): Boolean {
    if(this.pessoa.nome == undefined || this.pessoa.nome == ''
    || this.pessoa.cpf == undefined || this.pessoa.cpf == ''
    || this.pessoa.dataNascimento == undefined) {
      return true;
    }
    return false;
  }

}
