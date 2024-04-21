import { AFDomesticAccount, Balance } from '../entity/Account';
import { AFTransactionItem } from '../entity/AFTransactionItem';
import ItemData from '../entity/ItemData';

export class AccountViewModel {
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
export default new AccountViewModel();
