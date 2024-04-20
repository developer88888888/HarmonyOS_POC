export class ButtonInfoModel {
  index: number = 0;
  img: Resource = $r("app.media.tab_home_normal");
  selectImg: Resource = $r('app.media.tab_home_selected');
  title: Resource = $r('app.string.tab_home');
}

const buttonInfo: ButtonInfoModel[] = [
  {
    index: 0,
    img: $r('app.media.tab_home_normal'),
    selectImg: $r('app.media.tab_home_selected'),
    title: $r('app.string.tab_home')
  },
  {
    index: 1,
    img: $r('app.media.tab_globe_normal'),
    selectImg: $r('app.media.tab_globe_selected'),
    title: $r('app.string.tab_globe')
  },
  {
    index: 2,
    img: $r('app.media.tab_wealth_normal'),
    selectImg: $r('app.media.tab_wealth_selected'),
    title: $r('app.string.tab_wealth')
  },
  {
    index: 3,
    img: $r('app.media.tab_interests_normal'),
    selectImg: $r('app.media.tab_interests_selected'),
    title: $r('app.string.tab_interests')
  },
  {
    index: 4,
    img: $r('app.media.tab_my_normal'),
    selectImg: $r('app.media.tab_my_selected'),
    title: $r('app.string.tab_my')
  }
]

export { buttonInfo }