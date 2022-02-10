import {
  Box, Button, ButtonGroup,
  Heading, HStack, VStack, Spacer, Container, Text, Input, Image, Center
} from "@chakra-ui/react";

export default function Deliveroo() {
  return (
    <Container maxWidth={"container.xl"}>
      <HStack pt={4} pb={2}>
        <Heading size={"lg"}>Feliperoo</Heading>
        <Spacer/>
        <ButtonGroup spacing={4}>
          <Button>Partner with him</Button>
          <Button>Para Felipe!</Button>
        </ButtonGroup>
      </HStack>
      <HStack borderBottomWidth={1} pb={10} spacing={10}>
        <VStack w={"full"} alignItems={"flex-start"} spacing={10}>
          <Heading marginTop={20}>Your favorite dishes in the best hands</Heading>
          <VStack w={"full"} borderWidth={1} p={4} alignItems={"flex-start"}>
            <Text>Enter your fucking address:</Text>
            <HStack w={"full"}>
              <Input></Input>
              <Button>Search</Button>
            </HStack>
            <Text color={"gray"} fontSize={"sm"}>If you get sick is not his problem</Text>
          </VStack>
        </VStack>
        <Box w={"200px"}>
          <Image maxWidth='200px' src='chef.jpg' alt='naruto' objectFit='cover' />
        </Box>
      </HStack>
      <Center mt={20}>
        <Text color={"gray.300"}>Made with love by Sony</Text>
      </Center>
    </Container>
  )
}