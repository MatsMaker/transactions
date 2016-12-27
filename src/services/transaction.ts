import uuidV4 from 'uuid/v4';

export default class Transaction {
  id: string;
  createdAt: number;
  updatedAt: number;
  price: number;
  label: string;
  description: string;

  constructor(label: string = '', description: string = '', price: number = 0) {
    let time = new Date().getTime();
    this.id = uuidV4();
    this.label = label;
    this.description = description;
    this.createdAt = time;
    this.updatedAt = time;
    this.price = price;
  }

  updated() {
    this.updatedAt = new Date().getTime();
  }

}
