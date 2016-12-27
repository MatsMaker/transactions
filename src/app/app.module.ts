import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TransactionNewPage } from '../pages/transaction-new/transaction-new';
import { TransactionEditPage } from '../pages/transaction-edit/transaction-edit';
import { TransactionDetailsPage } from '../pages/transaction-details/transaction-details';
import { TotalPage } from '../pages/total/total';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TransactionNewPage,
    TransactionEditPage,
    TransactionDetailsPage,
    TotalPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TransactionNewPage,
    TransactionEditPage,
    TransactionDetailsPage,
    TotalPage
  ],
  providers: [{
    provide: ErrorHandler,
    useClass: IonicErrorHandler
  }]
})
export class AppModule {}
