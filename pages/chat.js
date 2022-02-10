import {
  Box,
  Button, ButtonGroup,
  Container,
  Flex,
  Heading,
  HStack,
  Input, Spacer,
  Stack,
  StackDivider,
  Text,
  VStack
} from "@chakra-ui/react";

export default function Chat() {
  return (
    <Box bgGradient='linear(to-l, #2c3e50, #3498db)'>
      <Flex p={2} bg={"white"} shadow={"lg"}>
        <Heading>Ring</Heading>
        <Spacer/>
        <ButtonGroup variant={"outline"} spacing={2}>
          <Button>Register</Button>
          <Button>Login</Button>
        </ButtonGroup>
      </Flex>
      <Container maxW={"container.lg"} p={0}>
        <HStack h="95vh" p={10} spacing={6}>
          <Stack w="50%" h="full">
            <Heading color={"white"}>Interactions</Heading>
            <Text>Find all your conversations below</Text>
            <VStack
              overflowY={"auto"}
              alignItems={"flex-start"}>
              <Flex bg={"gray.50"} shadow={"xl"} w={"full"} p={4}>
                <Heading size={"md"} flex={1}>Grupo #1</Heading>
                <Text fontSize={"sm"} as={"span"}>20 mins ago</Text>
              </Flex>
              <HStack w={"full"} p={4}>
                <Heading size={"md"}>$Blockchain</Heading>
                <Spacer/>
                <Text fontSize={"sm"} as={"span"}>20 mins ago</Text>
              </HStack>
              <HStack w={"full"} alignContent={"space-between"} p={4}>
                <Heading size={"md"} flex={1}>CosmosHub</Heading>
                <Text fontSize={"sm"} as={"span"}>20 mins ago</Text>
              </HStack>
              <HStack w={"full"} alignContent={"space-between"} p={4}>
                <Heading size={"md"} flex={1}>#Algorand</Heading>
                <Text fontSize={"sm"} as={"span"}>20 mins ago</Text>
              </HStack>
              <HStack w={"full"} alignContent={"space-between"} p={4}>
                <Heading size={"md"} flex={1}>@BTC CS</Heading>
                <Text fontSize={"sm"} as={"span"}>20 mins ago</Text>
              </HStack>
              <HStack w={"full"} alignContent={"space-between"} p={4}>
                <Heading size={"md"} flex={1}>Slack Call</Heading>
                <Text fontSize={"sm"} as={"span"}>20 mins ago</Text>
              </HStack>
              <HStack w={"full"} alignContent={"space-between"} p={4}>
                <Heading size={"md"} flex={1}>Whatsapp CN#</Heading>
                <Text fontSize={"sm"} as={"span"}>20 mins ago</Text>
              </HStack>
            </VStack>
          </Stack>
          <Flex w="full" h="full" direction={"column"}>
            <VStack borderRadius={8} overflowY={"auto"} spacing={8} bg={"gray.50"} padding={4} flex={1}>
              <Box bg={"blue.100"} shadow={"lg"} alignSelf={"flex-start"} p={3}>
                <Text align="left">Hello man how are you doing?! <br/> olis que tal como esta?</Text>
              </Box>
              <Box bg={"blue.100"} shadow={"md"} alignSelf={"flex-end"} p={3}>
                <Text align="right">Hello man how are you doing?! <br/> Hola</Text>
              </Box>
              <Box bg={"blue.100"} shadow={"md"} alignSelf={"flex-start"} p={3}>
                <Text>Hello man how are you doing?!</Text>
              </Box>
              <Box bg={"blue.100"} shadow={"md"} alignSelf={"flex-start"} p={3}>
                <Text align="left">Hello man how are you doing?! <br/> olis que tal como esta?</Text>
              </Box>
              <Box bg={"blue.100"} shadow={"md"} alignSelf={"flex-end"} p={3}>
                <Text align="right">Hello man how are you doing?! <br/> Hola</Text>
              </Box>
              <Box bg={"blue.100"} shadow={"md"} alignSelf={"flex-start"} p={3}>
                <Text>Hello man how are you doing?!</Text>
              </Box>
              <Box bg={"blue.100"} shadow={"md"} alignSelf={"flex-start"} p={3}>
                <Text align="left">Hello man how are you doing?! <br/> olis que tal como esta?</Text>
              </Box>
            </VStack>
            <HStack mt={2}>
              <Input bg={"white"} size={"lg"}></Input>
              <Button size={"lg"} n>Go!</Button>
            </HStack>
          </Flex>
        </HStack>
      </Container>
    </Box>
  )
}