import {Box} from "@chakra-ui/react";
import ShopNavbar from "./ShopNavbar";

export default function ShopLayout(props) {
  return (
    <Box>
      <ShopNavbar />
      {props.children}
    </Box>
  )
}