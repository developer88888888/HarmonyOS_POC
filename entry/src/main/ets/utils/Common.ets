import router from '@ohos.router';
import { WebParam } from '../entity/WebParam';

export function jumpToWeb(title: string, url: string | Resource) {
  router.pushUrl({
    url: "view/WebPage",
    params: new WebParam(title, url)
  }, router.RouterMode.Single)
}