import { AFDomesticAccount, Balance } from '../entity/Account';
import { AFTransactionItem } from '../entity/AFTransactionItem';
import ItemData from '../entity/ItemData';
import util from '@ohos.util';
import axios, { AxiosResponse } from "@ohos/axios";
import promptAction from '@ohos.promptAction';
import { Logger } from '../utils/Logger';

export class AccountViewModel {

  getAccountListDateFromServer(url:string) {
    // TODO: 知识点: 使用Axios获取Response.data为GBK格式的网络数据。
    axios<string, AxiosResponse<string>, null>({
      method: "get",
      url: url,
      responseType: 'ARRAY_BUFFER'
    })
      .then((res: AxiosResponse) => {
        // TODO: 知识点: 使用util.TextDecoder解码。
        // 首先使用create构造TextDecoder实例，将编码格式设置为gbk。
        const textDecoder = util.TextDecoder.create('utf-8', { ignoreBOM: true });
        // 其次使用decodeWithStream方法通过解码输入的参数，输出对应UTF-8格式的文本字符串。其中传入的参数必须为Uint8Array格式，因此需将获取的数据使用Uint8Array方法转换数组类型。
        const result = new Uint8Array(res.data);
        const resultString = textDecoder.decodeWithStream(result, { stream: false });
        Logger.debug(resultString)
        // 解析json字符串。
        //const jsonResult = JSON.parse(resultString) as JsonResult;
        //const jsonObj: Array<AFDomesticAccount> = jsonResult.ListModel;
      })
  }

  getAccountListData(): Array<AFDomesticAccount> {
    let listData: AFDomesticAccount[] = [
      new AFDomesticAccount(
        "HSBC Premier Saving",
        "123456789",
        new Balance("123.98", "USD")
      ),
      new AFDomesticAccount(
        "HSBC Advance Saving",
        "567888",
        new Balance("323.98", "USD")
      ),
      new AFDomesticAccount(
        "HSBC Premier Saving",
        "5647888",
        new Balance("23.98", "USD")
      )
    ]
    return listData;
  }

  getActionListData(): Array<ItemData> {
    let settingListData: ItemData[] = [
      new ItemData($r('app.string.action_make_payment'), $r('app.media.up')),
      new ItemData($r('app.string.action_manage_card'), $r('app.media.up'))
    ];
    return settingListData;
  }

  getTransactionHistoryData():Array<AFTransactionItem>{
    let listData: AFTransactionItem[] = [
      new AFTransactionItem("1","Something","LOG ON","Sales","343.56","USD","Dec 11, 2019",""),
      new AFTransactionItem("2","Something","LO5G ON","Sales","43.56","USD","Dec 11, 2019",""),
      new AFTransactionItem("3","Something","L5OG ON","Sales","-3943.56","USD","Dec 11, 2019",""),
      new AFTransactionItem("4","Something","LOG ON","Sales","3343.56","USD","Dec 11, 2019",""),
      new AFTransactionItem("5","Something","LOG ON","Sales","1343.56","USD","Dec 11, 2019",""),
      new AFTransactionItem("6","Something","L4OG ON","Sales","-6343.56","USD","Dec 11, 2019",""),
      new AFTransactionItem("7","Something","LOG ON","Sales","-3.56","USD","Dec 11, 2019",""),
      new AFTransactionItem("8","Something","LOG ON","Sales","40.86","USD","Dec 11, 2019","")
    ]
    return listData;
  }

}
class JsonResult {
  ListModel: Array<AFDomesticAccount> = [];
}
export default new AccountViewModel();
