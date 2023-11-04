import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'month'
})
export class MonthPipe implements PipeTransform {

  transform(value: string): string {
    let mask:string='00';
    let result:string='';
    if(value!==''){
      result=value+mask.substring(value.length);
    }else{
      result='00';
    }
    return result;
  }

}
