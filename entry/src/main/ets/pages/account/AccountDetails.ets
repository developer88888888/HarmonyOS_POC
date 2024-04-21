import { Account, AFDomesticAccount, Balance } from '../../entity/Account';
import { PageConstants } from '../../constants/PageConstants';
import { StyleConstants } from '../../constants/StyleConstants';
import ItemData from '../../entity/ItemData';

@Entry
@Component
export struct AccountDetails {

  build() {
    Column() {
      Row(){
        Text(`-163.00`)
          .fontSize(20)
          .fontColor(Color.Black)
          .textAlign(TextAlign.Center)
        Text(`GBP`)
          .fontSize(13)
          .fontColor($r('app.color.sixty_alpha_black'))
          .textAlign(TextAlign.Center)
          .margin(6)
      }
      Row(){
        Text(`Balance as of Jan 13, 2022`)
          .fontSize(12)
          .fontColor(Color.Black)
          .fontWeight(500)
          .textAlign(TextAlign.Center)
      }
      Column() {
        List() {
          ForEach(this.getActionListData(), (item: ItemData) => {
            ListItem() {
              this.actionCell(item)
            }
            .height($r('app.float.vp_forty_eight'))
            .onClick(() => {
              //Logger.error("onClick")
              //jumpToWeb(getContext(this).resourceManager.getStringSync(item.title), "https://www.hsbc.com.cn/zh-cn/help/contact/#feedback")
            })
          }, (item: ItemData) => JSON.stringify(item))
        }
        .backgroundColor(Color.White)
        .width(StyleConstants.FULL_WIDTH)
        // .height(StyleConstants.SET_LIST_WIDTH)
        .divider({
          strokeWidth: $r('app.float.setting_list_strokeWidth'),
          color: Color.Grey,
          startMargin: $r('app.float.setting_list_startMargin'),
          endMargin: $r('app.float.setting_list_endMargin')
        })
        .borderRadius($r('app.float.setting_list_borderRadius'))
        .padding({ top: $r('app.float.vp_four'), bottom: $r('app.float.vp_four') })
        .margin({ top: $r('app.float.vp_twelve') })
      }
      .alignItems(HorizontalAlign.Start)
      .margin({ top: $r('app.float.vp_twenty_four') })

    }
    .width('100%').padding(12)
    .backgroundColor($r('app.color.twenty_alpha_black'))
  }

  getActionListData(): Array<ItemData> {
    let settingListData: ItemData[] = [
      new ItemData($r('app.string.action_make_payment'), $r('app.media.up')),
      new ItemData($r('app.string.action_manage_card'), $r('app.media.up'))
    ];
    return settingListData;
  }

  @Builder
  actionCell(item: ItemData) {
    Row() {
      Row({ space: StyleConstants.COMMON_SPACE }) {
        Image(item.img)
          .width($r('app.float.vp_twenty_two'))
          .height($r('app.float.vp_twenty_two'))
        Text(item.title)
          .fontSize($r('app.float.middle_font_size'))
      }

      if (item.others === undefined) {
        Image($r('app.media.arrow_right'))
          .width($r('app.float.vp_twelve'))
          .height($r('app.float.vp_twelve'))
      } else {
        Toggle({ type: ToggleType.Switch, isOn: false })
      }
    }
    .justifyContent(FlexAlign.SpaceBetween)
    .width(StyleConstants.FULL_WIDTH)
    .padding({
      left: $r('app.float.vp_eight'),
      right: $r('app.float.vp_twenty_two')
    })
  }
}