export class WebParam{
  title: string
  url: string | Resource

  constructor(title: string, url: string | Resource) {
    this.title = title
    this.url = url
  }
}