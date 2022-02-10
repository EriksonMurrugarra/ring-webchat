import {
  AspectRatio,
  Box,
  Center,
  Heading,
  Image,
  Text,
  Wrap,
  WrapItem,
  VStack,
  Container,
  HStack, Spacer, Input, ButtonGroup, Button
} from "@chakra-ui/react";

export default function Test() {

  const Categories = () => {
    return (
      <Wrap spacing={4} mt={4}>
        <WrapItem>
          <Box textAlign={"center"} borderWidth={1} borderRadius={10} p={4}
               shadow={"md"}>
            <Image
              width={180}
              src="https://static.ah.nl/ah-static/images/packshots/AHWEBSHOP/6401.png"/>
            <Text mt={2}>Verduras y Frutas</Text>
          </Box>
        </WrapItem>
        <WrapItem>
          <Box textAlign={"center"} borderWidth={1} borderRadius={10} p={4}
               shadow={"md"}>
            <Image
              width={180}
              src="https://static.ah.nl/ah-static/images/packshots/AHWEBSHOP/6401.png"/>
            <Text mt={2}>Verduras y Frutas</Text>
          </Box>
        </WrapItem>
        <WrapItem>
          <Box textAlign={"center"} borderWidth={1} borderRadius={10} p={4}
               shadow={"md"}>
            <Image
              width={180}
              src="https://static.ah.nl/ah-static/images/packshots/AHWEBSHOP/6401.png"/>
            <Text mt={2}>Verduras y Frutas</Text>
          </Box>
        </WrapItem>
        <WrapItem>
          <Box textAlign={"center"} borderWidth={1} borderRadius={10} p={4}
               shadow={"md"}>
            <Image
              width={180}
              src="https://static.ah.nl/ah-static/images/packshots/AHWEBSHOP/6401.png"/>
            <Text mt={2}>Verduras y Frutas</Text>
          </Box>
        </WrapItem>
        <WrapItem>
          <Box textAlign={"center"} borderWidth={1} borderRadius={10} p={4}
               shadow={"md"}>
            <Image
              width={180}
              src="https://static.ah.nl/ah-static/images/packshots/AHWEBSHOP/6401.png"/>
            <Text mt={2}>Verduras y Frutas</Text>
          </Box>
        </WrapItem>
        <WrapItem>
          <Box textAlign={"center"} borderWidth={1} borderRadius={10} p={4}
               shadow={"md"}>
            <Image
              width={180}
              src="https://static.ah.nl/ah-static/images/packshots/AHWEBSHOP/1301.png"/>
            <Text mt={2}>Verduras y Frutas</Text>
          </Box>
        </WrapItem>
        <WrapItem>
          <Box textAlign={"center"} borderWidth={1} borderRadius={10} p={4}
               shadow={"md"}>
            <Image
              width={180}
              src="https://static.ah.nl/ah-static/images/packshots/AHWEBSHOP/6401.png"/>
            <Text mt={2}>Verduras y Frutas</Text>
          </Box>
        </WrapItem>
      </Wrap>
    )
  }

  const TopMiniHeader = () => {
    return (
      <HStack p={2} borderBottomWidth={1}>
        <HStack spacing={4}>
          <Text fontSize={"sm"}>
            Free Delivery
          </Text>
          <Text fontSize={"sm"}>
            24/7 Free support
          </Text>
          <Text fontSize={"sm"}>
            10% Discount
          </Text>
        </HStack>
        <Spacer/>
        <HStack>
          <Text fontSize={"sm"}>
            Stores
          </Text>
          <Text fontSize={"sm"}>
            Offers
          </Text>
        </HStack>

      </HStack>
    )
  }

  const NavBar = () => {
    return (
      <HStack mt={4} pb={6} borderBottomWidth={1}>
        <HStack spacing={4}>
          <Heading fontSize={"xx-large"}>Blink</Heading>
          <Text>Products</Text>
          <Text>Bonus</Text>
        </HStack>
        <Spacer />
        <Input w={400}/>
        <Spacer />
        <HStack>
          <Text>Cart</Text>
          <Button>Log in</Button>
        </HStack>
      </HStack>
    )
  }
  
  const Features = () => {
    return (
      <VStack alignItems={"flex-start"} mt={10}>
        <Heading size={"xl"}>Our Shops</Heading>
        <HStack spacing={6}>
          <VStack alignItems={"flex-start"} spacing={0}>
            <Image mb={4} borderRadius={20} width="230px" src="https://static.ah.nl/binaries/ah/content/gallery/ah-nl/ah-nl-products/pageEntries/supershop---prijsfavorieten.png/supershop---prijsfavorieten.png/ahonline%3AmediumPageEntryImage" />
            <Text fontWeight={"bold"} fontSize={20}>Favorite prices</Text>
            <Text fontSize={"sm"} color={"gray"}>More than others prices</Text>
          </VStack>
          <VStack alignItems={"flex-start"} spacing={0}>
            <Image mb={4} borderRadius={20} width="230px" src="https://static.ah.nl/binaries/ah/content/gallery/ah-nl/ah-nl-products/pageEntries/supershop---prijsfavorieten.png/supershop---prijsfavorieten.png/ahonline%3AmediumPageEntryImage" />
            <Text fontWeight={"bold"} fontSize={20}>Favorite prices</Text>
            <Text fontSize={"sm"} color={"gray"}>More than others prices</Text>
          </VStack>
          <VStack alignItems={"flex-start"} spacing={0}>
            <Image mb={4} borderRadius={20} width="230px" src="https://static.ah.nl/binaries/ah/content/gallery/ah-nl/ah-nl-products/pageEntries/supershop---prijsfavorieten.png/supershop---prijsfavorieten.png/ahonline%3AmediumPageEntryImage" />
            <Text fontWeight={"bold"} fontSize={20}>Favorite prices</Text>
            <Text fontSize={"sm"} color={"gray"}>More than others prices</Text>
          </VStack>
        </HStack>
      </VStack>
    )
  }

  return (
    <Box w={"full"} h={"full"} pb={20}>

      <Container maxWidth={"container.xl"}>
        <TopMiniHeader/>
        <NavBar/>
        <Categories/>
        <Features/>
      </Container>
    </Box>
  )

}