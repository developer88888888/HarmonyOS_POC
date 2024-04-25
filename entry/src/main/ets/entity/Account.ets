
export class AFDomesticAccount {
  accountName: string;
  accountNumber: string;
  accountBalance: Balance;

  constructor(accountName: string, accountNumber: string, accountBalance: Balance) {
    this.accountName = accountName;
    this.accountNumber = accountNumber;
    this.accountBalance = accountBalance;
  }
}

export class Balance{
  amount: string;
  currencyCode: string;
  constructor(amount: string, currencyCode: string) {
    this.amount = amount;
    this.currencyCode = currencyCode;
  }
}