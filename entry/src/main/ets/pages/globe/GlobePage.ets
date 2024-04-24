import { StyleConstants } from '../../constants/StyleConstants';
import GlobeBannerModel from '../../entity/GlobeBannerModel';
import { jumpToWeb } from '../../utils/Common';

@Component
export struct GlobePage {
  @State globeBannerList: GlobeBannerModel[] = [
    new GlobeBannerModel(1, "https://www.hsbc.com.hk/content/dam/hsbc/hk/images/16-9/13678-close-up-of-beautiful-smiling-young-asian-woman-sitting-889x500.jpg/jcr:content/renditions/cq5dam.web.590.1000.jpeg", "Globe", "https://www.hsbc.com.hk/zh-cn/investments/currency-exchange-rate-calculator/"),
    new GlobeBannerModel(2, "https://www.hsbc.com.hk/content/dam/hsbc/hk/images/16-9/13217-woman-using-tablet-coffee-shop-889x500.jpg/jcr:content/renditions/cq5dam.web.590.1000.jpeg", "Globe", "https://www.hsbc.com.hk/zh-cn/investments/currency-exchange-rate-calculator/"),
    new GlobeBannerModel(3, "https://www.hsbc.com.hk/content/dam/hsbc/hk/images/premier/16-9/13105-young-woman-using-smartphone-with-her-dog-2560x1440.jpg/jcr:content/renditions/cq5dam.web.590.1000.jpeg", "Globe", "https://www.services.cn-banking.hsbc.com.cn/PublicContent/common/rate/zh/exchange-rates.html")
  ]

  build() {
    Flex({ direction: FlexDirection.Column }) {
      this.CustomSwiper()
    }
  }

  @Builder
  CustomSwiper() {
    Swiper() {
      ForEach(this.globeBannerList, (item: GlobeBannerModel) => {
        Image(item.imagePath)
          .width(StyleConstants.FULL_WIDTH)
          .aspectRatio(StyleConstants.IMAGE_ASPECT_RATIO)
          .borderRadius($r('app.float.vp_sixteen'))
          .backgroundColor(Color.White)
          .onClick(() => {
            jumpToWeb(item.imagePath, item.url)
          })
      }, (item: GlobeBannerModel) => JSON.stringify(item.imagePath))
    }
    .indicatorStyle({ selectedColor: $r('app.color.indicator_select') })
    .autoPlay(true)
    .width(StyleConstants.FULL_WIDTH)
    .indicator(true)
    .displayCount(StyleConstants.DISPLAY_ONE)
    .padding($r('app.float.vp_twelve'))
    .visibility(this.globeBannerList.length > 0 ? Visibility.Visible : Visibility.Hidden)
  }
}
