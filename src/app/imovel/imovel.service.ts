import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Imovel } from '../imovel/imovel';

@Injectable()

export class ImovelService {

    imoveis: Imovel[] = [];
    lastId = 0;


    add(imovel: Imovel): Imovel {
        if (!imovel.id) {
            imovel.id = ++this.lastId;
        }
        this.imoveis.push(imovel);
        return imovel;
    }

    delete(id: number) {
        this.imoveis = this.imoveis
        .filter(todo => todo.id !== id);
    }

    updade(newImovel: Imovel): Imovel {
        const oldImovel = this.getById(newImovel.id);
        if(!oldImovel) {
            return
        }
    }

    getAll(): Imovel[] {
        return this.imoveis;
    }

    getById(id: number): Imovel {
        return this.imoveis
        .filter(todo => todo
        .id === id).pop();
    }



}