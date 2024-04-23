export default class GlobeBannerModel {
  id: number;
  imagePath: string;
  desc: string;
  url: string;

  constructor(id: number, imagePath: string, desc: string, url: string) {
    this.id = id;
    this.imagePath = imagePath;
    this.desc = desc;
    this.url = url;
  }
}