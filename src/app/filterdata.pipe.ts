import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterdata'
})

export class FilterdataPipe implements PipeTransform {
  transform(value: any, searchText: any): any {

    if (searchText) {
      return value.filter(word => word.name.indexOf(searchText) !== -1);
    }
    
  }

}