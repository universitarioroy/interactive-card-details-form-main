import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'interactive-card-details-form-main';
  name='';
  cardnumber='';
  month='';
  year='';
  cvc='';

  btnstate:boolean=true;
  sumnitForm:boolean=false;


  onSubmit(){
    this.sumnitForm=true;
  }
}
