import {HStack, Text} from "@chakra-ui/react";
import {useState} from "react";

export default function Navbar() {

  const [isMenuOpen, setMenuOpen] = useState(false)

  return <HStack justifyContent={"space-between"} p={4}>
    <Text>Menu</Text>
    <Text>Logo</Text>
    <Text>Cart</Text>
  </HStack>
}