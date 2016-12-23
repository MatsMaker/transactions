import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import TransactionsService from '../../services/transactions.service';
import Transaction from '../../services/transaction';

@Component({
  selector: 'page-transaction',
  templateUrl: 'transaction.html'
})
export class TransactionPage {
  transactionsService: TransactionsService;
  transition: Transaction;
  transactionIndex: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.transactionsService = new TransactionsService();
    this.transactionIndex = navParams.get('transactionIndex');
    console.log(this.transactionIndex);
    this.transactionsService.get()
    this.transition = new Transaction('', '');
      // .then(() => {
      //   if (this.transactionIndex){
      //     this.transition = this.transactionsService.data[this.transactionIndex];
      //   } else {
      //     this.transition = new Transaction('', '');
      //   }
      // });
  }

  onNewTransaction() {
    this.transactionsService
      .add(this.transition)
      .then(() => {
        this.transition = new Transaction('', '');
        this.transactionsService.get()
      });
  }

}
