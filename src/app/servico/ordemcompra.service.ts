import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { OrdemCompra } from '../model/ordemcompra'
 
@Injectable()

export class OrdemCompraService {

    private baseUrl:string='http://localhost:8080';
    private headers = new Headers({'Content-Type':'application/json'});
    private options = new RequestOptions({headers:this.headers})
    private ordemcompra = new OrdemCompra();
    constructor(
        private http:Http
    ) { }

    getOrdens() {
        return this.http.get(this.baseUrl+'/ordensc',this.options)
        .map((response:Response) => response.json())
        .catch(this.errorHandler);
    }
    getOrdem(id:Number) {
        return this.http.get(this.baseUrl+'/ordemc/'+id,this.options)
        .map((response:Response) => response.json())
        .catch(this.errorHandler);
    }
    deleteOrdem(id:Number) {
        return this.http.delete(this.baseUrl+'/ordemc/'+id,this.options)
        .map((response:Response) => response.json())
        .catch(this.errorHandler);
    }
    createOrdem(ordemcompra:OrdemCompra) {
        return this.http.post(this.baseUrl+'/ordemc',JSON.stringify(ordemcompra),this.options)
        .map((response:Response) => response.json())
        ;
    }
    updateImovel(ordemcompra:OrdemCompra) {
        return this.http.put(this.baseUrl+'/ordemc',JSON.stringify(ordemcompra),this.options)
        .map((response:Response) => response.json())
        .catch(this.errorHandler);
    }

    setter(ordemcompra:OrdemCompra) {
        this.ordemcompra=ordemcompra;
    }
    getter() {
        return this.ordemcompra;
    }

    errorHandler(error:Response) {
        return Observable.throw(error||"SERVE ERROR")
        }
}