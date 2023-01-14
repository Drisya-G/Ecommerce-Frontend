import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(allproducts: [], searchkey: string, propname: string): any[] {

    const result: any = []
    if (!allproducts || searchkey == '' || propname == '') {
      return allproducts;
    }
    //searchkey
    allproducts.forEach((product: any) => {
      if (product[propname].trim().toLowerCase().includes(searchkey.toLowerCase())) {
        result.push(product);
        //trim=to remove white space  includes=include searchkey
      }

    })


    return result;
  }




}
