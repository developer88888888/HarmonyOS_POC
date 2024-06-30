import { LoginWithHuaweiIDButton, loginComponentManager } from '@kit.AccountKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

@Entry
@Component
struct PreviewLoginButtonPage {
  /**
   * 构造LoginWithHuaweiIDButton组件的控制器
   */
  controller: loginComponentManager.LoginWithHuaweiIDButtonController = new loginComponentManager.LoginWithHuaweiIDButtonController()
    .onClickLoginWithHuaweiIDButton((error: BusinessError, response: loginComponentManager.HuaweiIDCredential) => {
      if (error) {
        hilog.error(0x0000, 'testTag', 'error: %{public}s', JSON.stringify(error));
        return;
      }

      if (response) {
        hilog.info(0x0000, 'testTag', 'response: %{public}s', JSON.stringify(response));
        return;
      }
    });

  build() {
    Column() {
      Row() {
        /**
         * 调用华为帐号登录组件
         */
        LoginWithHuaweiIDButton({
          params: {
            style: loginComponentManager.Style.ICON_RED,
            loginType: loginComponentManager.LoginType.PHONE_NUMBER,
            iconRadius: 48
          },
          controller: this.controller
        })
      }
      .height('100%')
      .width('100%')
      .margin({
        left: $r('sys.float.ohos_id_max_padding_start'),
        right: $r('sys.float.ohos_id_max_padding_end')
      })
    }
    .width('100%')
    .height('100%')
    .justifyContent(FlexAlign.Center)
  }
}