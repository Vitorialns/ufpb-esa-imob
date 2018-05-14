import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import {Imovel} from '../imovel/imovel'

@Injectable()

export class ImovelService {

    private baseUrl:string='http://localhost:8080';
    private headers = new Headers({'Content-Type':'application/json'});
    private options = new RequestOptions({headers:this.headers})
    private imovel = new Imovel();
    constructor(
    private http:Http
    ) { }

    getImoveis() {
        return this.http.get(this.baseUrl+'/imoveis',this.options)
        .map((response:Response) => response.json())
        .catch(this.errorHandler);
    }

    getImovel(id:Number) {
        return this.http.get(this.baseUrl+'/imovel/'+id,this.options)
        .map((response:Response) => response.json())
        .catch(this.errorHandler);
    }

    deleteImovel(id:Number) {
        return this.http.delete(this.baseUrl+'/imovel/'+id,this.options)
        .map((response:Response) => response.json())
        .catch(this.errorHandler);
    
    }

    createImovel(imovel:Imovel) {
        return this.http.post(this.baseUrl+'/imovel',JSON.stringify(imovel),this.options)
        .map((response:Response) => response.json())
        ;
    }

    updateImovel(imovel:Imovel) {
        return this.http.put(this.baseUrl+'/imovel',JSON.stringify(imovel),this.options)
        .map((response:Response) => response.json())
        .catch(this.errorHandler);
    }


    errorHandler(error:Response) {
    return Observable.throw(error||"SERVE ERROR")
    }

    setter(imovel:Imovel) {
        this.imovel=imovel;
    }
    getter() {
        return this.imovel
    }


}