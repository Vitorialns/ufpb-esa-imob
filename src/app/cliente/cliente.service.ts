import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Cliente } from './cliente';




@Injectable()
export class ClienteService {
    clientes: Cliente[] = [];
    lastId = 0;



    add(cliente: Cliente): Cliente {

        if (!cliente.id) {
            cliente.id = ++this.lastId;
        }
        this.clientes.push(cliente);
        return cliente;
    }

    delete(id: number) {
        this.clientes = this.clientes
            .filter(todo => todo.id !== id);
    }

    updade(newCliente: Cliente): Cliente {
        const oldCliente = this.getById(newCliente.id);
        if (!oldCliente) {
            return
        }
    }

    getAll(): Cliente[] {
        return this.clientes;
    }

    getById(id: number): Cliente {
        return this.clientes
            .filter(todo => todo
                .id === id).pop();
    }



}
