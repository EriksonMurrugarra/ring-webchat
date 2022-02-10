import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Container,
  Heading,
  HStack,
  Icon,
  Image,
  Flex,
  Input, InputGroup, InputRightElement, Link,
  Spacer,
  Text,
  VStack
} from "@chakra-ui/react";
import {MdExpandMore, MdFastfood, MdFavorite, MdMenu, MdNearMe} from "react-icons/md"
import style from "../deliveroo.module.css";

export default function Index() {
  return (
    <Box>
      <Box className={style.MainBanner}>
        <Container maxWidth={"container.xl"}>
          <HStack pt={4} pb={2}>
            <Heading size={"md"} color={"white"}><Icon as={MdFastfood}/> Feliperoo</Heading>
            <Spacer/>
            <Flex gap={4} direction={{base: 'column', 'sm': 'row'}}>
              <Link href="/feliperoo/register">
                <Button leftIcon={<MdExpandMore color={"#0aa195"}/>}>Partner with him?</Button>
              </Link>
              <Button onClick={() => alert("No Pares Felipe!!")} leftIcon={<MdMenu color={"#0aa195"}/>}>Para
                Felipe!</Button>
            </Flex>
          </HStack>
          <Flex pb={10} mt={[0, 4]} gap={6} direction={{ base: 'column', md: 'row'}}>
            <VStack w={"full"} alignItems={"flex-start"} spacing={10}>
              <Heading marginTop={[0, 20]} color={"#440063"} fontSize={"5xl"}>Your favorite Fud in the best hands, delivered
                to your home</Heading>
              <VStack w={"full"} borderColor={"#0aa195"} borderWidth={1} p={6} alignItems={"flex-start"} bg={"white"}
                      spacing={4}>
                <Text>Enter your fucking address</Text>
                <Flex w={"full"} gap={{base: 2, sm: 4}} direction={{base: "column", sm: "row"}}>
                  <InputGroup>
                    <Input placeholder="Your fucking address"/>
                    <InputRightElement><MdNearMe color={"#0aa195"}/></InputRightElement>
                  </InputGroup>
                  <Button bgColor={"#00ccbc"} color={"white"}>Search</Button>
                </Flex>
                <Text color={"gray"} fontSize={"sm"}>* Putas dont pay anything. We are #PutasFriendly.</Text>
              </VStack>
            </VStack>
            <Box w={"full"} alignContent={"center"}>
              <Image src='felipe.svg' alt='naruto' objectFit='cover'/>
            </Box>
          </Flex>
        </Container>
      </Box>
      <Center mt={6} pb={6}>
        <Text color={"gray"} fontSize={"sm"}>
          by <b>Sony</b></Text>
      </Center>
    </Box>
  )
}