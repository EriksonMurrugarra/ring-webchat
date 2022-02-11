import {SimpleGrid} from "@chakra-ui/react";
import ShopArticleItem from "./ShopArticleItem";

export default function ShopArticleList(props) {
  const {products} = props

  return (
    <SimpleGrid columns={[1, 2, 3, 5, 6]} gap={6} m={6}>
      {
        products.map(p =>
          <ShopArticleItem key={`article-${p.id}`} {...p}/>
        )
      }
    </SimpleGrid>
  )
}