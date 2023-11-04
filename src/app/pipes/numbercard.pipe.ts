import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numbercard'
})
export class NumbercardPipe implements PipeTransform {

  transform(value: string): string {
    let mask:string='0000000000000000';
    let result:string='';
    if(value!==''){
      result=value+mask.substring(value.length);
    }else{
      result='0000000000000000';
    }
    result=result.substring(0,4)+' '+result.substring(4,8)+' '+result.substring(8,12)+' '+result.substring(12);
    return result;
  }

}
