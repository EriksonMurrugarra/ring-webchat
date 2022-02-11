import {Box} from "@chakra-ui/react";
import ShopNavbar from "../../components/shop/ShopNavbar";
import ShopCart from "../../components/shop/ShopCart";
import {useState} from "react";
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