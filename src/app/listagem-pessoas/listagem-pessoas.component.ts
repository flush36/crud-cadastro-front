import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../service/pessoa.service';
import { Pessoa } from '../models/pessoa';

@Component({
  selector: 'app-listagem-pessoas',
  templateUrl: './listagem-pessoas.component.html',
  styleUrls: ['./listagem-pessoas.component.css']
})
export class ListagemPessoasComponent implements OnInit {

  constructor(private service: PessoaService) { }
  
  pessoa : Pessoa;
  pessoas: any = [];
  deleteId = {id : 0}
  ngOnInit() {
    this.pessoa = new Pessoa();
    this.getPessoas();
  }

  getPessoas() {
    this.service.getPessoas().subscribe(pessoas => {
        this.pessoas = pessoas.json();
        console.log(this.pessoas)
    },error => {
      console.log("deu error");
    })
  }

  buscarPessoa() {
    this.service.buscarPessoaService(this.pessoa).subscribe(pessoa => {
     this.pessoas = pessoa.json();
    }, error => {
      console.log(error);
    }); 
  }

  deletar(index) {
    this.deleteId = this.pessoas[index];
    
    this.service.deletar(this.deleteId.id).subscribe(() => {
      console.log(this.deleteId.id)
      this.pessoas.splice(index, 1);
    },error => {
      console.log(error)
    })
    
  }
}
