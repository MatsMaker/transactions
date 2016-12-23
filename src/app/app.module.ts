import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TransactionPage } from '../pages/transaction/transaction';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TransactionPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TransactionPage
  ],
  providers: [{
    provide: ErrorHandler,
    useClass: IonicErrorHandler
  }]
})
export class AppModule {}
