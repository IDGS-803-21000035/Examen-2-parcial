import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], arg: string): any[] {
    if (!value || !arg) return value; 
  
    const result = value.filter(pos => {
      return pos.nombre.toLowerCase().includes(arg.toLowerCase());
    });
  
    return result;
  }
  

}
