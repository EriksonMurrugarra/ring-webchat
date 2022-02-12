import {Button, Flex, HStack, Icon, Image} from "@chakra-ui/react";
import {MdMenu, MdShoppingBasket} from "react-icons/md";
import ShopCart from "./ShopCart";
import {useState} from "react";

export default function ShopNavbar() {
  const [isCartOpen, setCartOpen] = useState(false);
  return <>
    <HStack justifyContent={"space-between"} p={4} bgGradient='linear(to-l, #2c3e50, #3498db)'>
      <Icon cursor="pointer" fill={"white"} as={MdMenu} w={30} h={30}/>
      <Image alt={"algo"} cursor="pointer" src="../logo.png" h={50}/>
      <Flex gap={4}>
        <Icon
          onClick={() => setCartOpen(true)}
          cursor="pointer"
          fill={"white"} as={MdShoppingBasket} w={30} h={30}/>
        <Button size={"sm"}>Log In</Button>
      </Flex>
    </HStack>
    <ShopCart isOpen={isCartOpen} onClose={() => setCartOpen(false)}/>
  </>
}