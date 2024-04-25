import { StyleConstants } from '../../constants/StyleConstants';
import ItemData from '../../entity/ItemData';
import { jumpToWeb } from '../../utils/Common';
import { Logger } from '../../utils/Logger';
import myViewModel from '../../viewmodel/MyViewModel';
import { router } from '@kit.ArkUI';

@Component
export struct MyPage {
  private scroller: Scroller = new Scroller();

  build() {
    Scroll(this.scroller) {
      Column() {
        Column() {
          Text($r('app.string.contact_us')).titleTextStyle()
          Column() {
            Row() {
              Text($r('app.string.site_service'))
                .fontSize($r('app.float.big_font_size'))
                .fontWeight(StyleConstants.FONT_WEIGHT_THREE)
                .padding({ left: $r('app.float.vp_twelve') })
              Text($r('app.string.find_site'))
                .fontSize($r('app.float.smaller_font_size'))
                .padding({ right: $r('app.float.vp_twelve') })
            }
            .justifyContent(FlexAlign.SpaceBetween)
            .margin({ top: $r('app.float.vp_six') })
            .height($r('app.float.vp_fifty_six'))
            .width(StyleConstants.FULL_WIDTH)
            .border({
              radius: {topLeft: $r('app.float.vp_four'), topRight: $r('app.float.vp_four')}
            })
            .backgroundColor(Color.White)
            .onClick(() => {
              Logger.error("onClick")
              jumpToWeb("test1.html", $rawfile("test1.html"))
            })
            Line().lineStyle()
            Row() {
              Text($r('app.string.my_site'))
                .fontSize($r('app.float.big_font_size'))
                .fontWeight(StyleConstants.FONT_WEIGHT_THREE)
                .padding({ left: $r('app.float.vp_twelve') })
            }
            .justifyContent(FlexAlign.SpaceBetween)
            .height($r('app.float.vp_fifty_six'))
            .width(StyleConstants.FULL_WIDTH)
            .border({
              radius: {bottomLeft: $r('app.float.vp_four'), bottomRight: $r('app.float.vp_four')}
            })
            .backgroundColor(Color.White)
            .onClick(() => {
              router.pushUrl({ url: "view/WebViewWithJsBridge" })
            })
          }
          .alignItems(HorizontalAlign.Start)

          Column() {
            Text($r('app.string.assistant')).titleTextStyle()

            List() {
              ForEach(myViewModel.getSettingListData(), (item: ItemData) => {
                ListItem() {
                  this.settingCell(item)
                }
                .height($r('app.float.vp_forty_eight'))
                .onClick(() => {
                  Logger.error("onClick")
                  jumpToWeb(getContext(this).resourceManager.getStringSync(item.title), "https://www.hsbc.com.cn/zh-cn/help/contact/#feedback")
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
        .alignItems(HorizontalAlign.Start)
        .margin({ left: $r('app.float.vp_twelve'), top: $r('app.float.vp_six'), right: $r('app.float.vp_twelve') })
      }
      .margin({ top: $r('app.float.vp_twenty_four') })
      .height(StyleConstants.FULL_HEIGHT)
      .width(StyleConstants.FULL_WIDTH)
      .alignItems(HorizontalAlign.Center)
    }
  }

  @Builder
  settingCell(item: ItemData) {
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

@Extend(Line)
function lineStyle() {
  .width(StyleConstants.FULL_WIDTH)
  .height($r('app.float.vp_one'))
  .backgroundColor($r('app.color.five_alpha_black'))
}

@Extend(Text)
function titleTextStyle() {
  .fontSize($r('app.float.vp_eighteen'))
  .fontWeight(StyleConstants.FONT_WEIGHT_FOUR)
  .fontColor($r('app.color.sixty_alpha_black'))
}
