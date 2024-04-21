export class AFTransactionItem {
  transactionId: string;
  title: string;
  subTitle: string;
  description: string;
  amount: string;
  currency: string;
  transactionDate: string;
  transactionType: string;

  constructor(  transactionId: string,
  title: string,
  subTitle: string,
  description: string,
  amount: string,
  currency: string,
  transactionDate: string,
  transactionType: string) {
    this.transactionId = transactionId;
    this.title = title;
    this.subTitle = subTitle;
    this.description =description;
    this.amount = amount;
    this.currency = currency;
    this.transactionDate =transactionDate;
    this.transactionType = transactionType
  }
}