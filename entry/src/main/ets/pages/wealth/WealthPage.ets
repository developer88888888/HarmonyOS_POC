import { PageConstants } from '../../constants/PageConstants';
import { StyleConstants } from '../../constants/StyleConstants';
import { jumpToWeb } from '../../utils/Common';
import { BridgeWebView, JsBridge, JsCallback } from 'JsBridge'
import webview from '@ohos.web.webview';

@Component
export struct WealthPage {
  private controller: webview.WebviewController = new webview.WebviewController();

  aboutToAppear() {
    // 配置Web开启调试模式
    webview.WebviewController.setWebDebuggingAccess(true);
    JsBridge.getInstance().register("hsbc", (param: string, callback: JsCallback) => {
      let result = '';
      if (param) {
        const bridgeParam: object = JSON.parse(param);
        if (bridgeParam['value']) {
          result = bridgeParam['value'];
        }
      }
      callback(result);
    })
  }

  aboutToDisappear() {
    JsBridge.getInstance().unregister("hsbc")
  }

  build() {
    Row() {
      Column() {
        // Button("Native Call H5")
        //   .margin(10)
        //   .onClick(() => {
        //     this.controller.runJavaScript('callH5Method("I come from native click!")');
        //   })

        BridgeWebView({
          webUrl: $rawfile('index.html'),
          controller: this.controller
        })
          .height("100%")
      }
      .width('100%')
    }
    .height('100%')
  }

  onPageShow(): void {
    console.log('wealth show');
    // jumpToWeb("test1.html", $rawfile("test1.html"))
  }
}
