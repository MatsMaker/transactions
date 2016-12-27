import uuidV4 from 'uuid/v4';

export default class Transaction {
  id: string;
  createdAt: number;
  updatedAt: number;
  value: number;
  label: string;
  description: string;
  profit: Boolean;

  constructor(label: string = '', description: string = '', value: number = undefined) {
    let time = new Date().getTime();
    this.id = uuidV4();
    this.label = label;
    this.description = description;
    this.createdAt = time;
    this.updatedAt = time;
    this.value = value;
  }

  updated() {
    this.updatedAt = new Date().getTime();
  }

}
