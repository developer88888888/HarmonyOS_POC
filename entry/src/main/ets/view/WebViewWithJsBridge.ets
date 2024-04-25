import { BridgeWebView, JsBridge, JsCallback } from 'JsBridge'
import webview from '@ohos.web.webview';

@Entry
@Component
struct WebViewWithJsBridge {
  private controller: webview.WebviewController = new webview.WebviewController();

  aboutToAppear() {
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
        Button("Native Call H5")
          .margin(10)
          .onClick(() => {
            this.controller.runJavaScript('callH5Method("I come from native click!")');
          })

        BridgeWebView({
          webUrl: $rawfile('test2.html'),
          controller: this.controller
        })
          .height("100%")
      }
      .width('100%')
    }
    .height('100%')
  }
}