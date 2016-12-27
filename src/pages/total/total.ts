import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import TransactionsService from '../../services/transactions.service';

@Component({
  selector: 'page-total',
  templateUrl: 'total.html'
})
export class TotalPage {
  transactionsService: TransactionsService;
  total: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    const self = this;
    this.transactionsService = new TransactionsService();
    this.transactionsService.get().then(() => {
      self.total = 0;
      self.transactionsService.data.forEach((transaction) => {
        if (transaction.profit) {
          self.total += Number(transaction.value);
        } else {
          self.total -= Number(transaction.value);
        }
      });
    });
  }

}
