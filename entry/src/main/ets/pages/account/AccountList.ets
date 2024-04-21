import { AFDomesticAccount, Balance } from '../../entity/Account';
import router from '@ohos.router';
import { Logger } from '../../utils/Logger';
import accountViewModel from '../../viewmodel/AccountViewModel'

@Entry
@Component
export struct AccountList {
  private accountList:Array<AFDomesticAccount> = accountViewModel.getAccountListData()

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
      }.backgroundColor($r('app.color.twenty_alpha_black')).padding(12)
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
          }.onClick(() => {
            Logger.error("on account list item clicked!")
            router.pushUrl({
              url: "pages/account/AccountDetails",params : item
            }, router.RouterMode.Single)
          })
        })
      }.divider({
        strokeWidth: 1,
        color: $r('app.color.twenty_alpha_black'),
        startMargin: 0,
        endMargin: 0}).padding(16)
    }
    .height('100%')
    .backgroundColor(Color.White).layoutWeight(1)
  }

}