import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
//import { Observable } from 'rxjs/Observable';
import {Cliente} from '../cliente/cliente'


@Injectable()
export class ClienteService {

  
  private baseUrl:string='http://localhost:8080';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers})
  private cliente = new Cliente();
  constructor(
    private http:Http
  ) { }

  getClientes() {
    return this.http.get(this.baseUrl+'/users',this.options)
    .map((response:Response) => response.json())
    .catch(this.errorHandler);
  }

  getCliente(id:Number) {
    return this.http.get(this.baseUrl+'/user/'+id,this.options)
    .map((response:Response) => response.json())
    .catch(this.errorHandler);
  }
  deleteCliente(id:Number) {

    return this.http.delete(this.baseUrl+'/user/'+id,this.options)
    .map((response:Response) => response.json())
    .catch(this.errorHandler);

  }
  createCliente(cliente:Cliente) {

    return this.http.post(this.baseUrl+'/user',JSON.stringify(cliente),this.options)
    .map((response:Response) => response.json())
    ;

  }
  updateCliente(cliente:Cliente) {

    return this.http.put(this.baseUrl+'/user',JSON.stringify(cliente),this.options)
    .map((response:Response) => response.json())
    .catch(this.errorHandler);

  }
  errorHandler(error:Response) {
    return Observable.throw(error||"SERVE ERROR")
  }
  setter(cliente:Cliente) {
    this.cliente=cliente;
  }
  getter() {
    return this.cliente
  }
}
