import ShopData from "./shop.json"

export function getAllArticles() {
  return ShopData
}

export function getArticle(id) {
  return ShopData.filter(p => p.id == id)[0]
}