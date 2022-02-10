import {
  Button,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  Input,
  Select,
  SimpleGrid, Text
} from "@chakra-ui/react";

export default function RegisterUser() {
  return (
    <Container pt={6}>
      <Heading>Register</Heading>
      <Text color={"gray"}>We won't deliver any shit but fill this if you want</Text>
      <SimpleGrid columns={2} columnGap={3} rowGap={4} mt={4}>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input placeholder="Sony" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input placeholder="Murrugarra" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input placeholder="Your Hearth" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Telephone</FormLabel>
            <Input placeholder="310683861853" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select>
              <option>Netherlands</option>
              <option>Peru</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <Checkbox defaultChecked>Ship to my fucking delivery address</Checkbox>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Button bgColor={"#00ccbc"} color={"white"} size="lg" w={"full"}>Register</Button>
        </GridItem>
      </SimpleGrid>
    </Container>
  )
}