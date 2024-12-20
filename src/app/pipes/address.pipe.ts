import { Pipe, PipeTransform } from '@angular/core';
import { IAddress } from '../interfaces/user/address.interface';
import { animate } from '@angular/animations';

@Pipe({
  name: 'address',
  standalone: true
})
export class AddressPipe implements PipeTransform {

  transform(address: IAddress): string {
    const INVALID_ADDRESS = !address || !address.rua || !address.cidade || !address.estado

    if (INVALID_ADDRESS) {
      return "Endereço indisponível ou inválido"
    }

    return address.rua + ", " + address.numero + ", " + address.cidade + " - " + address.estado
  }

}
