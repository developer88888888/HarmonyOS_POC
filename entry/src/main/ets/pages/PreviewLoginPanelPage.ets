import { LoginPanel, loginComponentManager } from '@kit.AccountKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';
import router from '@ohos.router';
import { PageConstants } from '../constants/PageConstants';
import { Logger} from '../utils/Logger';


@Entry
@Component
struct PreviewLoginPanelPage {
  /**
   * 是否展示LoginPanel组件
   */
  @State show: boolean = true;
  /**
   * 定义LoginPanel展示的隐私文本
   */
  privacyText: loginComponentManager.PrivacyText[] = [{
    text: '已阅读并同意',
    type: loginComponentManager.TextType.PLAIN_TEXT
  }, {
    text:'隐私政策',
    tag: '隐私政策',
    type: loginComponentManager.TextType.RICH_TEXT
  }, {
    text: '和',
    type: loginComponentManager.TextType.PLAIN_TEXT
  },
    {
      text: '用户服务协议',
      tag: '用户服务协议',
      type: loginComponentManager.TextType.RICH_TEXT
    }
  ];
  /**
   * 构造LoginPanel组件的控制器
   */
  controller: loginComponentManager.LoginPanelController = new loginComponentManager.LoginPanelController()
    .onClickLoginWithHuaweiIDButton((error: BusinessError, response: loginComponentManager.HuaweiIDCredential) => {
      hilog.info(0x0000, 'testTag', 'onClickLoginWithHuaweiIDButton');
      if (error) {
        hilog.error(0x0000, 'testTag', 'error: %{public}s', JSON.stringify(error));
        return;
      }

      if (response) {
        router.replaceUrl({ url: PageConstants.MAIN_PAGE_URL })
          .catch((err: Error) => {
            Logger.error(JSON.stringify(err));
          })
        hilog.info(0x0000, 'testTag', 'response: %{public}s', JSON.stringify(response));
        this.show = false;
        return;
      }
    })
    .onClickOptionalLoginButton(() => {
      hilog.info(0x0000, 'testTag', 'onClickOptionalLoginButton ');
      this.show = false;
    })
    .onClickPrivacyText((error: BusinessError, tag: string) => {
      if (error) {
        hilog.error(0x0000, 'testTag', 'onClickPrivacyText fail: %{public}s', JSON.stringify(error));
        return;
      }
      hilog.info(0x0000, 'testTag', 'onClickPrivacyText tag: %{public}s', tag);
    })
    .onClickCloseButton(() => {
      hilog.info(0x0000, 'testTag', 'onClickCloseButton ');
      this.show = false;
    });

  build() {
    if (this.show) {
      /**
       * 构造LoginPanel UI组件参数
       */
      Stack() {
        LoginPanel({
          show: this.show,
          params: {
            appInfo: {
              appIcon: $r('app.media.app_icon'),
              appName: '应用名称',
              appDescription: '应用描述'
            },
            privacyText: this.privacyText,
            loginType: loginComponentManager.LoginType.PHONE_NUMBER,
            optionalLoginButtonAttr: { text: '其他方式登录' }
          },
          controller: this.controller
        })
      }
      .height('100%')
      .width('100%')
    }
  }
}