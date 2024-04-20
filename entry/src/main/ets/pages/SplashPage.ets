import router from '@ohos.router';
import { PageConstants } from '../constants/PageConstants';
import { StyleConstants} from '../constants/StyleConstants';
import { Logger} from '../utils/Logger';

@Entry
@Component
struct SplashPage {
  private timeOutId: number = 0;

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

  aboutToAppear() {
    this.timeOutId = setTimeout(() => {
      router.replaceUrl({ url: PageConstants.MAIN_PAGE_URL })
        .catch((err: Error) => {
          Logger.error(JSON.stringify(err));
        })
    }, PageConstants.DELAY_TIME);
  }

  aboutToDisappear() {
    clearTimeout(this.timeOutId);
  }
}