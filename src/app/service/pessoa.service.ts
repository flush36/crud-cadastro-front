import { Injectable } from '@angular/core';
import { Http,  Headers, RequestOptions } from '@angular/http';

@Injectable()
export class PessoaService {

  private baseUrl:string= 'http://localhost:9000';
  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({headers:this.headers});

  constructor(private _http: Http) { }

  buscarPorId(id) {
    return this._http.get(this.baseUrl+'/pessoa/'+id, this.options)
  }

  getPessoas(){
    return this._http.get(this.baseUrl+'/pessoa', this.options);
  }

  buscarPessoaService(pessoa) {
    return this._http.post(this.baseUrl + '/pessoa/pesquisar', pessoa, this.options);
  }

  deletar(id) {
    return this._http.delete(this.baseUrl + '/pessoa/' + id, this.options);
  }

  cadastrar(pessoa) {
    return this._http.post(this.baseUrl + '/pessoa', pessoa,  this.options );
  }
}
