import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { OrdemServico } from '../model/ordemservico'
 
@Injectable()

export class OrdemServicoService {

    private baseUrl:string='http://localhost:8080';
    private headers = new Headers({'Content-Type':'application/json'});
    private options = new RequestOptions({headers:this.headers})
    private ordemservico = new OrdemServico();
    constructor(
        private http:Http
    ) { }

    getOrdens() {
        return this.http.get(this.baseUrl+'/ordenss',this.options)
        .map((response:Response) => response.json())
        .catch(this.errorHandler);
    }
    getOrdem(id:Number) {
        return this.http.get(this.baseUrl+'/ordems/'+id,this.options)
        .map((response:Response) => response.json())
        .catch(this.errorHandler);
    }
    deleteOrdem(id:Number) {
        return this.http.delete(this.baseUrl+'/ordems/'+id,this.options)
        .map((response:Response) => response.json())
        .catch(this.errorHandler);
    }
    createOrdem(ordemservico:OrdemServico) {
        return this.http.post(this.baseUrl+'/ordems',JSON.stringify(ordemservico),this.options)
        .map((response:Response) => response.json())
        ;
    }
    updateImovel(ordemservico:OrdemServico) {
        return this.http.put(this.baseUrl+'/ordems',JSON.stringify(ordemservico),this.options)
        .map((response:Response) => response.json())
        .catch(this.errorHandler);
    }

    setter(ordemservico:OrdemServico) {
        this.ordemservico=ordemservico;
    }
    getter() {
        return this.ordemservico;
    }

    errorHandler(error:Response) {
        return Observable.throw(error||"SERVE ERROR")
        }
}