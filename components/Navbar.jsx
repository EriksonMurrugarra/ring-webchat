import {Box, Button, Flex, HStack, Icon, Image, Text} from "@chakra-ui/react";
import {useState} from "react";
import {MdMenu, MdShoppingBasket} from "react-icons/md";

export default function Navbar({onCartOpen}) {
  return <HStack justifyContent={"space-between"} p={4} bgGradient='linear(to-l, #2c3e50, #3498db)'>
    <Icon cursor="pointer" fill={"white"} as={MdMenu} w={30} h={30}/>
    <Image cursor="pointer" src="logo.png" h={50}/>
    <Flex gap={4} >
      <Icon
        onClick={onCartOpen}
        cursor="pointer"
        fill={"white"} as={MdShoppingBasket} w={30} h={30}/>
      <Button size={"sm"}>Log In</Button>
    </Flex>
  </HStack>
}