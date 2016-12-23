export default class Transaction {
  label: string;
  description: string;
  createdAt: number;
  updatedAt: number;

  constructor(label: string, description: string) {
    let time = new Date().getTime();
    this.label = label;
    this.description = description;
    this.createdAt = time;
    this.updatedAt = time;
  }

}
