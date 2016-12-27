import uuidV4 from 'uuid/v4';

export default class Transaction {
  id: string;
  createdAt: number;
  updatedAt: number;
  label: string;
  description: string;

  constructor(label: string, description: string) {
    let time = new Date().getTime();
    this.id = uuidV4();
    this.label = label;
    this.description = description;
    this.createdAt = time;
    this.updatedAt = time;
  }

  updated() {
    this.updatedAt = new Date().getTime();
  }

}
