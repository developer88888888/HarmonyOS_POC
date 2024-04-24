/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License,Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { StyleConstants } from '../constants/StyleConstants';
import { PageConstants } from '../constants/PageConstants';

import { HomePage } from '../pages/home/HomePage';
import { AccountList } from './account/AccountList';
import { buttonInfo, ButtonInfoModel } from '../entity/MainPageData';
import { MyPage } from './my/MyPage';
import { GlobePage } from './globe/GlobePage';

@Entry
@Component
struct MainPage {
  @StorageLink('IndexPage') currentPageIndex: number = 0;

  build() {
    Column() {
      Tabs({
        barPosition: BarPosition.End,
        index: this.currentPageIndex
      }) {
        TabContent() {
          AccountList()
        }
        .tabBar(this.BottomNavigation(buttonInfo[PageConstants.HOME_INDEX]))

        TabContent() {
          GlobePage()
        }
        .tabBar(this.BottomNavigation(buttonInfo[PageConstants.GLOBE_INDEX]))

        TabContent() {
          HomePage()
        }
        .tabBar(this.BottomNavigation(buttonInfo[PageConstants.WEALTH_INDEX]))

        TabContent() {
          HomePage()
        }
        .tabBar(this.BottomNavigation(buttonInfo[PageConstants.INTERESTS_INDEX]))

        TabContent() {
          MyPage()
        }
        .tabBar(this.BottomNavigation(buttonInfo[PageConstants.MY_INDEX]))
      }
      .barWidth(StyleConstants.FULL_WIDTH)
      .barHeight($r('app.float.vp_fifty_six'))
      .scrollable(false)
      .onChange((index: number) => {
        this.currentPageIndex = index;
      })
    }
    .backgroundColor($r('app.color.page_background'))
  }

  @Builder
  BottomNavigation(button: ButtonInfoModel) {
    Column({ space: PageConstants.BUTTON_SPACE }) {
      Image(this.currentPageIndex === button.index ? button.selectImg : button.img)
        .objectFit(ImageFit.Contain)
        .width($r('app.float.main_image_size'))
        .height($r('app.float.main_image_size'))
      Text(button.title)
        .fontColor(this.currentPageIndex === button.index ? $r('app.color.focus_color') : Color.Black)
        .opacity(this.currentPageIndex === button.index ? StyleConstants.FULL_OPACITY : StyleConstants.SIXTY_OPACITY)
        .fontWeight(StyleConstants.FONT_WEIGHT_FIVE)
        .textAlign(TextAlign.Center)
        .fontSize($r('app.float.micro_font_size'))
    }
    .width(StyleConstants.FULL_WIDTH)
    .height(StyleConstants.FULL_HEIGHT)
    .alignItems(HorizontalAlign.Center)
    .justifyContent(FlexAlign.Center)
  }
}