export class AFDetailsItem {
  labelDisplayText: string;
  valueDisplayText: string;
  currency: string;
  formattedValue: string;
  constructor(labelDisplayText: string, valueDisplayText: string, formattedValue: string, currency: string) {
    this.labelDisplayText = labelDisplayText;
    this.valueDisplayText = valueDisplayText;
    this.formattedValue = formattedValue;
    this.currency =currency;
  }
}