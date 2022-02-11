import {
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Text,
  Button,
  Drawer
} from "@chakra-ui/react";

export default function ShopCart({isOpen, onClose}) {
  return (
    <Drawer
      isOpen={isOpen}
      placement='right'
      onClose={onClose}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Your Shopping Cart</DrawerHeader>

        <DrawerBody>
          <Text>OLIS</Text>
        </DrawerBody>

        <DrawerFooter>
          <Button colorScheme='blue'>Checkout</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}