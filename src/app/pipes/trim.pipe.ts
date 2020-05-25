import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim'
})
export class TrimPipe implements PipeTransform {

  transform(value: any, limit: number = 50): any {
    return value.length > limit ? value.slice(0, limit) + '...' : value;
  }

}
