import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import TransactionsService from '../../services/transactions.service';
import Transaction from '../../services/transaction';

@Component({
  selector: 'page-transaction-details',
  templateUrl: 'transaction-details.html',
  providers: [TransactionsService],
})
export class TransactionDetailsPage {
  transition: Transaction;
  transactionIndex: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private transactionsService: TransactionsService) {
    this.transactionIndex = navParams.get('transactionIndex');
    this.transactionsService.get()
      .then(() => {
        if (this.transactionIndex !== undefined) {
          this.transition = this.transactionsService.data[this.transactionIndex];
        } else {
          this.transition = new Transaction('', '');
        }
      });
  }

}
