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
  newTransition: Transaction;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.transactionsService = new TransactionsService();
    this.newTransition = new Transaction('', '');
    this.transactionsService.get();
  }

  onNewTransaction() {
    this.transactionsService
      .add(this.newTransition)
      .then(() => {
        this.newTransition = new Transaction('', '');
        this.transactionsService.get()
      });
  }

}
