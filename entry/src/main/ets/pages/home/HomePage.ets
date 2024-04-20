import { PageConstants } from '../../constants/PageConstants';
import { StyleConstants } from '../../constants/StyleConstants';

@Component
export struct HomePage {

  build() {
    Flex({direction: FlexDirection.Column, alignItems: ItemAlign.Center}){
      Column() {
        Image($r("app.media.splash"))
          .width( $r('app.float.splash_image_size'))
          .aspectRatio(PageConstants.IMAGE_ASPECT_RATIO)
          .objectFit(ImageFit.Contain)
      }
      .justifyContent(FlexAlign.Center)
      .alignItems(HorizontalAlign.Center)
      .flexGrow(StyleConstants.FLEX_GROW)

    }
    .height(StyleConstants.FULL_HEIGHT)
    .width(StyleConstants.FULL_WIDTH)
    .backgroundColor($r('app.color.start_window_background'))
  }
}
