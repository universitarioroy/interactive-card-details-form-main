import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cvc'
})
export class CvcPipe implements PipeTransform {

  transform(value:string): string {
    let mask:string='000';
    let result:string='';
    if(value!==''){
      result=value+mask.substring(value.length);
    }else{
      result='000';
    }
    return result;
  }

}
