import webView from '@ohos.web.webview';
import promptAction from '@ohos.promptAction';
import { JsBridge } from '../core/JsBridge';

@Component
export struct BridgeWebView {
  private controller: webView.WebviewController = new webView.WebviewController();
  private webUrl: string | Resource = 'https://www.hsbc.com.cn/';

  bridge: Bridge = {
    call: (param: string) => {
      if (param) {
        const bridgeParam: object = JSON.parse(param);
        if (bridgeParam['method']) {
          JsBridge.getInstance().call(bridgeParam['method'], param, this.controller);
        }
      }
    }
  }

  build() {
    Web({ src: this.webUrl, controller: this.controller })
      .fileAccess(true)
      .javaScriptAccess(true)
      .javaScriptProxy({
        object: this.bridge,
        name: "jsBridge",
        methodList: ["call"],
        controller: this.controller
      })
      .onProgressChange((event) => {
        if (event) {
          console.error("onProgressChange: " + event.newProgress);
        }
      })
      .onPageEnd(event => {
        console.info('onPageEnd: ${this.webUrl}')
      })
      .onAlert((event?) => {
        promptAction.showToast({ message: event?.message })
        if (event) {
          event.result.handleConfirm()
        }
        return true;
      })
      .onConsole((event) => {
        if (event) {
          console.info(event.message.getMessage())
        }
        return false
      })
  }
}

interface Bridge {
  call: (data: string) => void
}