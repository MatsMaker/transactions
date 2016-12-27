import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import TransactionsService from '../../services/transactions.service';

import { TransactionDetailsPage } from '../transaction-details/transaction-details';
import { TransactionEditPage } from '../transaction-edit/transaction-edit';
import { TransactionNewPage } from '../transaction-new/transaction-new';
import { TotalPage } from '../total/total';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  transactionsService: TransactionsService;
  params: Object;

  constructor(public navCtrl: NavController) {
    this.transactionsService = new TransactionsService();
    this.transactionsService.get();
  }

  toTotal() {
    this.navCtrl.push(TotalPage);
  }

  toNew(index) {
    this.navCtrl.push(TransactionNewPage);
  }

  toView(index) {
    this.navCtrl.push(TransactionDetailsPage, {transactionIndex: index});
  }

  toEdit(index) {
    this.navCtrl.push(TransactionEditPage, {transactionIndex: index});
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
