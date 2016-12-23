import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';

import TransactionsService from '../../services/transactions.service';
import Transaction from '../../services/transaction';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  transactionsService: TransactionsService;

  constructor(platform: Platform, navCtrl: NavController) {
    platform.ready()
      .then(() => {
        this.transactionsService = new TransactionsService();
        return this.transactionsService.get();
      })
    .catch(err => console.warn(err));
  }

  onRemove(index) {
    this.transactionsService.removeByIndex(index);
  }

  onNewTransaction() {
    this.transactionsService
      .add(new Transaction(`new-${this.transactionsService.data.length}`, 'description'))
      .then(() => this.transactionsService.get());
  }

}
