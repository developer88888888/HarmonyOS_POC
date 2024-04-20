import { StyleConstants } from '../../constants/StyleConstants';

@Component
export struct MyPage {
  private scroller: Scroller = new Scroller();

  build() {
    Scroll(this.scroller) {
      Column({ space: StyleConstants.COMMON_SPACE }) {
        Text($r('app.string.contact_us')).titleTextStyle()
        Row() {
          Text($r('app.string.site_service'))
            .fontSize($r('app.float.bigger_font_size'))
            .padding({ left: $r('app.float.vp_twelve') })
          Text($r('app.string.find_site'))
            .fontSize($r('app.float.smaller_font_size'))
            .padding({ right: $r('app.float.vp_twelve') })
        }
        .justifyContent(FlexAlign.SpaceBetween)
        .margin({ top: $r('app.float.vp_six') })
        .height($r('app.float.vp_fifty_six'))
        .width(StyleConstants.FULL_WIDTH)
        .backgroundColor(Color.White)
        .borderRadius($r('app.float.vp_four'))

        // Line().lineStyle()
      }
      .margin({ top: $r('app.float.vp_twenty_four') })
      .height(StyleConstants.FULL_HEIGHT)
      .width(StyleConstants.FULL_WIDTH)
      .alignItems(HorizontalAlign.Start)
    }
  }
}

@Extend(Line)
function lineStyle() {
  .width(StyleConstants.FULL_WIDTH)
  .height($r('app.float.vp_four'))
  .backgroundColor(Color.White)
}

@Extend(Text)
function titleTextStyle() {
  .fontSize($r('app.float.vp_twenty'))
  .fontWeight(StyleConstants.FONT_WEIGHT_SEVEN)
  .fontColor($r('app.color.sixty_alpha_black'))
  .margin({ top: $r('app.float.vp_twelve') })
  .padding({ left: $r('app.float.vp_twelve') })
}
