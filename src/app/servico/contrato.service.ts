import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import {Contrato} from '../model/contrato'

@Injectable()
export class ContratoService {

    private baseUrl:string='http://localhost:8080';
    private headers = new Headers({'Content-Type':'application/json'});
    private options = new RequestOptions({headers:this.headers})
    private contrato = new Contrato();
    constructor(
        private http:Http
    ) { }

    getContratos() {
        return this.http.get(this.baseUrl+'/contratos',this.options)
        .map((response:Response) => response.json())
        .catch(this.errorHandler);
      }

    getContrato(id:Number) {
        return this.http.get(this.baseUrl+'/contrato/'+id,this.options)
        .map((response:Response) => response.json())
        .catch(this.errorHandler);
    }

    deleteContrato(id:Number) {
        return this.http.delete(this.baseUrl+'/contrato/'+id,this.options)
        .map((response:Response) => response.json())
        .catch(this.errorHandler);
    
    }

    createContrato(contrato:Contrato) {
        return this.http.post(this.baseUrl+'/contrato',JSON.stringify(contrato),this.options)
        .map((response:Response) => response.json());
        
    }

    updateContrato(contrato:Contrato) {
        return this.http.put(this.baseUrl+'/contrato',JSON.stringify(contrato),this.options)
        .map((response:Response) => response.json())
        .catch(this.errorHandler);
    }


    errorHandler(error:Response) {
    return Observable.throw(error||"SERVE ERROR")
    }

    setter(contrato:Contrato) {
        this.contrato=contrato;
    }
    getter() {
        return this.contrato
    }

}
