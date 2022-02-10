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
  Input,
  Spacer,
  Text,
  VStack
} from "@chakra-ui/react";
import {MdExpandMore, MdFastfood, MdMenu} from "react-icons/md"
import style from "./deliveroo.module.css";

export default function Deliveroo() {
  return (
      <Box className={style.MainBanner}>
        <Container  maxWidth={"container.xl"}>
          <HStack pt={4} pb={2}>
            <Heading size={"md"} color={"white"}><Icon as={MdFastfood}/> Feliperoo</Heading>
            <Spacer/>
            <ButtonGroup spacing={4}>
              <Button leftIcon={<MdExpandMore color={"#0aa195"}/>}>Partner with him?</Button>
              <Button leftIcon={<MdMenu color={"#0aa195"}/>}>Para Felipe!</Button>
            </ButtonGroup>
          </HStack>
          <HStack borderBottomWidth={1} pb={10} spacing={10} mt={10}>
            <VStack w={"full"} alignItems={"flex-start"} spacing={10}>
              <Heading marginTop={20}>Your favorite dishes in the best hands, delivered to your home</Heading>
              <VStack w={"full"} borderColor={"#0aa195"} borderWidth={1} p={4} alignItems={"flex-start"} bg={"white"}>
                <Text>Enter your fucking address:</Text>
                <HStack w={"full"}>
                  <Input></Input>
                  <Button bgColor={"#00ccbc"} color={"white"}>Search</Button>
                </HStack>
                <Text color={"gray"} fontSize={"sm"}>If you get sick is not his problem. Be carefully!</Text>
              </VStack>
            </VStack>
            <Box w={"full"} alignContent={"center"}>
              <Image w={"80%"} src='felipe.svg' alt='naruto' objectFit='cover'/>
            </Box>
          </HStack>
        </Container>
        <Center mt={20}>
          <Text color={"black"} fontSize={"sm"}>Made with love by Sony</Text>
        </Center>
      </Box>

      )
      }