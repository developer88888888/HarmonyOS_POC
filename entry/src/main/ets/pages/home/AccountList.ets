import { Account, AFDomesticAccount, Balance } from  '../../entity/Account';
import { PageConstants } from '../../constants/PageConstants';
import { StyleConstants } from '../../constants/StyleConstants';

@Entry
@Component
export struct AccountList {
  @State message: string = 'Hello World';
  private accountList:Array<AFDomesticAccount> = this.getAccountListData();

  build() {
    Column() {
      Row(){
        Column() {
          Text(`Replace this header sample with any view that meets your journey needs`)
            .width('100%')
            .fontSize(14)
            .fontColor(Color.Black)
            .textAlign(TextAlign.Start)
          Row(){
            Button('NO',{ type: ButtonType.Normal, stateEffect: true })
              .height(20)
              .fontSize(14)
              .backgroundColor(Color.White)
              .fontColor(Color.Red)
            Button('YES',{ type: ButtonType.Normal, stateEffect: true })
              .height(20)
              .fontSize(14)
              .backgroundColor(Color.White)
              .fontColor(Color.Red)
          }.width('100%').justifyContent(FlexAlign.End)
        }.backgroundColor(Color.White).padding(16)
      }.backgroundColor(Color.Gray).padding(12)
      Row() {
        Text(`My debit accounts`)
          .width('100%')
          .fontSize(18)
          .fontColor(Color.Black)
          .textAlign(TextAlign.Start)
      }.padding(12)
      List({ space: 10 }) {
        ForEach(this.accountList, (item: AFDomesticAccount) => {
          ListItem() {
              Column() {
                Row() {
                  Text(`${item.accountName}`)
                    .width('100%')
                    .height(25)
                    .fontSize(16)
                    .fontColor(Color.Black)
                    .textAlign(TextAlign.Start)
                    .fontWeight(500)
                }
                Row() {
                  Text(`${item.accountNumber}`)
                    .width('100%')
                    .height(25)
                    .fontSize(16)
                    .fontColor(Color.Black)
                    .textAlign(TextAlign.Start)
                }
                Row() {
                  Text(`${item.accountBalance.amount} ${item.accountBalance.currencyCode}`)
                    .width('100%')
                    .height(25)
                    .fontSize(16)
                    .fontColor(Color.Black)
                    .textAlign(TextAlign.End)
                }
              }
          }
        })
      }.divider({
        strokeWidth: 1,
        color: Color.Gray,
        startMargin: 0,
        endMargin: 0}).padding(16)
    }
    .height('100%')
    .backgroundColor(0xF1F3F5)
  }

  getAccountListData():Array<AFDomesticAccount>{
    let listData: AFDomesticAccount[] = [
      new AFDomesticAccount(
        "HSBC Premier Saving",
        "123456789",
        new Balance("123.98","USD")
      ),
      new AFDomesticAccount(
        "HSBC Advance Saving",
        "567888",
        new Balance("323.98","USD")
      ),
      new AFDomesticAccount(
        "HSBC Premier Saving",
        "5647888",
        new Balance("23.98","USD")
      )
    ]
    return listData;
  }

}