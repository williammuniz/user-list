import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
  standalone: true
})
export class StatusPipe implements PipeTransform {

  transform(status: boolean): string {
    const INVALID_STATUS = status === undefined || status === null;

    if (INVALID_STATUS) {
      return "Status Indisponível ou Inválido";
    }
    return status ? "Ativo" : "Inativo";
  }

}
