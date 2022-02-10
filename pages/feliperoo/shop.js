import {
  Box, Button,
  ButtonGroup, Divider, Flex,
  Heading, Container,
  HStack,
  Icon, Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement, Radio, RadioGroup, Spacer, Text, VStack
} from "@chakra-ui/react";
import {MdFastfood, MdHome, MdMenu, MdSearch} from "react-icons/md";

export default function FeliperooShopping() {
  return <Box ml={10} mr={10}>
    <HStack p={4}>
      <Heading w={250} size={"md"} color={"#0aa195"}>
        <Icon as={MdFastfood}/> Feliperoo</Heading>
      <InputGroup>
        <InputLeftElement>
          <MdSearch color={"#0aa195"} size={20}/>
        </InputLeftElement>
        <Input bg={"gray.50"} placeholder="Search papi!"></Input>
      </InputGroup>
      <ButtonGroup>
        <Button leftIcon={<MdHome color={"#0aa195"}/>}>Jaus</Button>
        <Button leftIcon={<MdMenu color={"#0aa195"}/>}>Meniu</Button>
      </ButtonGroup>
    </HStack>
    <Divider/>

    <Flex>
      <VStack minWidth={300}>
        <HStack w={"full"} p={2} pb={4} pt={4}>
          <Image src={"../bicicletero.png"} h={10}/>
          <VStack alignItems={"flex-start"} spacing={0}>
            <Text fontSize={"sm"} color={"gray"}>Now</Text>
            <Heading fontSize={"md"}>WASE Stratum</Heading>
          </VStack>
          <Spacer/>
          <Text fontSize={"sm"} color={"#0aa195"}>Change</Text>
        </HStack>
        <Divider />
        <RadioGroup w={"full"} defaultValue={1}>
         <VStack alignItems={"flex-start"} ml={4}>
           <Radio value={1}>Delivery</Radio>
           <Radio value={2}>Pickup</Radio>
         </VStack>
        </RadioGroup>
        <Divider />
        <VStack pl={6} w={"full"} alignItems={"flex-start"}>
          <Heading fontSize={"sm"} mt={6} mb={2}>Drugs</Heading>
          <RadioGroup w={"full"} defaultValue={1}>
            <VStack alignItems={"flex-start"} >
              <Radio value={1}>Meta</Radio>
              <Radio value={2}>Cocain</Radio>
              <Radio value={2}>Racumin</Radio>
              <Radio value={2}>Crocodile</Radio>
              <Radio value={2}>Exta</Radio>
            </VStack>
          </RadioGroup>
        </VStack>
        <Divider/>
        <VStack pl={6} w={"full"} alignItems={"flex-start"}>
          <Heading fontSize={"sm"} mt={6} mb={2}>Beers</Heading>
          <RadioGroup w={"full"} defaultValue={1}>
            <VStack alignItems={"flex-start"} >
              <Radio value={1}>Cuzquena</Radio>
              <Radio value={2}>Bavaria</Radio>
              <Radio value={2}>Pilsen</Radio>
              <Radio value={2}>Crocodile</Radio>
              <Radio value={2}>Hertog</Radio>
            </VStack>
          </RadioGroup>
        </VStack>
        <Divider/>
        <VStack pl={6} w={"full"} alignItems={"flex-start"}>
          <Heading fontSize={"sm"} mt={6} mb={2}>Putas By Age</Heading>
          <RadioGroup w={"full"} defaultValue={1}>
            <VStack alignItems={"flex-start"} >
              <Radio value={2}>60 - 80</Radio>
              <Radio value={2}>80 - 200</Radio>
              <Radio value={2}>Other side</Radio>
            </VStack>
          </RadioGroup>
        </VStack>
      </VStack>
      <VStack w={"full"}>

      </VStack>
    </Flex>
  </Box>
}