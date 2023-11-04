import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxMaskDirective, NgxMaskPipe,provideNgxMask} from 'ngx-mask';
import { NumbercardPipe } from './pipes/numbercard.pipe';
import { YearPipe } from './pipes/year.pipe';
import { MonthPipe } from './pipes/month.pipe';
import { CvcPipe } from './pipes/cvc.pipe';
import { NamePipe } from './pipes/name.pipe';
import { OnlyletterDirective } from './customdirectivas/onlyletter.directive';
import { MonthvalidDirective } from './customdirectivas/monthvalid.directive';




@NgModule({
  declarations: [
    AppComponent,
    NumbercardPipe,
    YearPipe,
    MonthPipe,
    CvcPipe,
    NamePipe,
    OnlyletterDirective,
    MonthvalidDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxMaskDirective, NgxMaskPipe,
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }


