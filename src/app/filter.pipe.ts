import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false //will add filtered element after filtering
})
export class FilterPipe implements PipeTransform {
  // value is arr of servers:
  transform(value: any, filterString: string): any {
    if(value.length === 0 || filterString === '') {
      return value;
    }
    return value.filter(st => st.status === filterString)
  }

}
