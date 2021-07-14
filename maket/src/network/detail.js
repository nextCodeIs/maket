import { request } from './request'

export function getDetailData(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getRecommend() {
  return request({
    url: '/recommend'
  })
}

export class DetailGoodsData {
  constructor(itemInfo, columns, services) {
    this.desc = itemInfo.title
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
  }
}

export class DetailShopData {
  constructor(shopInfo) {
    this.name = shopInfo.name
    this.shopLogo = shopInfo.shopLogo
    this.score = shopInfo.score
    this.shopUrl = shopInfo.shopUrl
    this.goods = shopInfo.cGoods
    this.sells = shopInfo.cSells
  }
}
