import ShopArticleList from "../../components/shop/ShopArticleList";
import {getAllArticles} from "../../data/ShopDataClient";
import ShopLayout from "../../components/shop/ShopLayout";

export default function Index() {

  const products = getAllArticles()
  return (
    <ShopLayout>
      <ShopArticleList products={products}/>
    </ShopLayout>

  )
}