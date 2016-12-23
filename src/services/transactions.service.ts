import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import Transaction from './transaction';

@Injectable()
export default class TransactionsService {
  private storage: Storage;
  itemKey: string = 'transactions';
  data: Array<Transaction> = [];

  private _getAll() {
    return this.storage.get(this.itemKey)
      .then(data => {
        return this.data = JSON.parse(data) || [];
      });
  }

  private _saveAll() {
    return this.storage.set(this.itemKey, JSON.stringify(this.data));
  }

  constructor() {
    this.storage = new Storage();
  }

  removeByIndex(index) {
    console.log(index);
    this.data.splice(index, 1);
    return this._saveAll();
  }

  get() {
    return this._getAll();
  }

  add(transaction: Transaction) {
    this.data.push(transaction);
    return this._saveAll();
  }

}
