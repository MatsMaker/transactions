import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import TransactionsService from '../../services/transactions.service';
import Transaction from '../../services/transaction';

import { TransactionPage } from '../transaction/transaction';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  transactionsService: TransactionsService;

  constructor(public navCtrl: NavController) {
    this.transactionsService = new TransactionsService();
    this.transactionsService.get();
  }

  goToTransactionPage() {
    this.navCtrl.push(TransactionPage);
  }

  onRemove(index) {
    this.transactionsService.removeByIndex(index);
  }

  ionViewWillEnter() {
    if(this.transactionsService) {
      this.transactionsService.get();
    }
  }

}
