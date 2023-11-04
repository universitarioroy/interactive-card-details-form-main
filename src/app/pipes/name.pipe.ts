import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(value:string): string {
    let mask:string='Jane Appleseed';
    let result:string='';

    if(value!==''){
        result=value+mask.substring(value.length);
    }else{
      result='Jane Appleseed';
    }
    return result;
  }

}
