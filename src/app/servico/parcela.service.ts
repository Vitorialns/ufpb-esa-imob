import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { Parcela } from '../model/parcela';

@Injectable()
export class ParcelaService {

    private baseUrl:string='http://localhost:8080';
    private headers = new Headers({'Content-Type':'application/json'});
    private options = new RequestOptions({headers:this.headers})
    private parcela = new Parcela();
    constructor(
        private http:Http
    ) { }

    getParcelas() {
        return this.http.get(this.baseUrl+'/parcelas',this.options)
        .map((response:Response) => response.json())
        .catch(this.errorHandler);
    }
    getParcela(id:Number) {
        return this.http.get(this.baseUrl+'/parcela/'+id,this.options)
        .map((response:Response) => response.json())
        .catch(this.errorHandler);
    }
    createParcela(parcela:Parcela) {
        return this.http.post(this.baseUrl+'/parcela',JSON.stringify(parcela),this.options)
        .map((response:Response) => response.json());
    }
    updateParcela(parcela:Parcela) {
        return this.http.put(this.baseUrl+'/parcela',JSON.stringify(parcela),this.options)
        .map((response:Response) => response.json())
        .catch(this.errorHandler);
    }
    setter(parcela:Parcela) {
        this.parcela=parcela;
    }
    getter() {
        return this.parcela;
    }



      errorHandler(error:Response) {
        return Observable.throw(error||"SERVE ERROR")
        }
    }