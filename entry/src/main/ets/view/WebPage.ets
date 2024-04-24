import router from '@ohos.router'
import webview from '@ohos.web.webview'
import promptAction from '@ohos.promptAction'
import { WebParam } from '../entity/WebParam'
import { StyleConstants } from '../constants/StyleConstants'
import { TitleComponent } from './TitleComponent'
import { Logger } from '../utils/Logger'

@Entry
@Component
struct WebPage {
  controller: webview.WebviewController = new webview.WebviewController()
  @State webParam: WebParam = router.getParams() as WebParam
  @State isLoading: boolean = true;
  @State progressVal: number = 0;
  h5CallNativeMethod: H5CallNativeMethod = {
    showToast: (data: string) => {
      promptAction.showToast({
        message: data,
        duration: 2000
      })
      this.controller.runJavaScript('openDialog()')
    }
  }

  build() {
    Column() {
      TitleComponent({
        title: this.webParam.title, back: () => {
          Logger.error(this.webParam.title)
          if (this.controller.accessBackward()) {
            this.controller.backward()
          } else {
            router.back()
          }
        }
      })
      if (this.isLoading) {
        Progress({ value: this.progressVal, total: 100, type: ProgressType.Linear }).width(StyleConstants.FULL_WIDTH)
      }
      Web({ src: this.webParam.url, controller: this.controller })
        .fileAccess(true)
        .zoomAccess(false)
        .javaScriptAccess(true)
        .imageAccess(true)
        .onlineImageAccess(true)
        .onProgressChange((event) => {
          if (event) {
            this.progressVal = event.newProgress
          }
        })
        .onPageEnd(() => {
          this.isLoading = false;
          Logger.info(`onPageEnd: ${this.webParam.url}`)
        })
        .onErrorReceive((event) => {
          if (event) {
            promptAction.showToast({
              message: `onErrorReceive: ${event.error.getErrorInfo()}`,
              duration: 1000
            })
          }
        })
        .onConsole((event) => { // h5中所有的console.log打印的内容会在这个方法中被日志输出
          if (event) {
            Logger.info(event.message.getMessage())
          }
          return false
        })
        .width('100%')
        .height('100%')
        .javaScriptProxy({
          object: this.h5CallNativeMethod, // 此对象名称对应上面定义的方法组名称
          name: 'callOhosNative', // 用来统一注入到window的方法集合名称
          methodList: ["showToast"], // 注入到h5中的方法，统一会注入到callOhosNative里面
          controller: this.controller
        })
    }
  }
}

interface H5CallNativeMethod {
  showToast: (data: string) => void
}