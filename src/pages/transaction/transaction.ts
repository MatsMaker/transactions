import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.transactionsService = new TransactionsService();
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

  onNewTransaction() {
    const self = this;
    this.transactionsService
      .add(this.transition)
      .then(() => {
        this.transition = new Transaction('', '');
        this.transactionsService.get()
        .then(() => {
          let alert = this.alertCtrl.create({
            title: self.transition.label,
            subTitle: 'Transaction had created!',
            buttons: ['OK']
          });
          alert.present();
        });
      });
  }

  onUpdateTransaction() {
    const self = this;
    this.transition.updatedAt = new Date().getTime();
    this.transactionsService
      .update(this.transition, this.transactionIndex)
      .then(() => {
        this.transactionsService.get()
          .then(() => {
            let alert = this.alertCtrl.create({
              title: self.transition.label,
              subTitle: 'Transaction had updated!',
              buttons: ['OK']
            });
            alert.present();
          });
      });
  }

}
