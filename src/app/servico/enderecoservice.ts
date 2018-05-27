import { Endereco } from '../model/endereco'
import { Injectable } from '@angular/core';


@Injectable()

export class EnderecoService {
    endereco: Endereco;
    getter() {
        return this.endereco;
    }
    setter(endereco: Endereco) {
        return this.endereco=endereco;
    }
}