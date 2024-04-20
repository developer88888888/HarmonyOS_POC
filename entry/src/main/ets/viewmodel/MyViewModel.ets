import ItemData from '../entity/ItemData';

export class MyViewModel {

  getSettingListData(): Array<ItemData> {
    let settingListData: ItemData[] = [
      new ItemData($r('app.string.setting_telephone'), $r('app.media.setting_telephone')),
      new ItemData($r('app.string.setting_law'), $r('app.media.setting_law')),
      new ItemData($r('app.string.setting_about'), $r('app.media.setting_about')),
      new ItemData($r('app.string.setting_advice'), $r('app.media.setting_advice'))
    ];
    return settingListData;
  }
}

export default new MyViewModel();