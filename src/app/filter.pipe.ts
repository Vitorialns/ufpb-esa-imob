import { Pipe, PipeTransform } from '@angular/core';
import { Cliente } from './cliente/cliente';
import { ClienteService } from './cliente/cliente.service';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  constructor(private clienteService: ClienteService){}


  transform(clientes: any[], searchText: string): any[] {
    if(!clientes) return [];
    if(! searchText) return clientes;

    searchText = searchText.toLowerCase();

    return clientes.filter(it => {
      return it.toLowerCase().includes(searchText);
    }) 
  }
  

}
