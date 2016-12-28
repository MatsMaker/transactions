import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import TransactionsService from '../../services/transactions.service';
import Transaction from '../../services/transaction';

@Component({
  selector: 'page-transaction-new',
  templateUrl: 'transaction-new.html',
  providers: [TransactionsService]
})
export class TransactionNewPage {
  transition: Transaction;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private transactionsService: TransactionsService) {
    this.transactionsService.get()
      .then(() => {
        this.transition = new Transaction();
      });
  }

  onNewTransaction() {
    const self = this;
    this.transactionsService
      .add(this.transition)
      .then(() => {
        this.transition = new Transaction();
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

}
