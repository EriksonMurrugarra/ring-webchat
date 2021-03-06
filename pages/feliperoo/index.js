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
  Input, InputGroup, InputRightElement, Link as CLink,
  Spacer,
  Text,
  VStack, SimpleGrid, Divider
} from "@chakra-ui/react";
import {MdExpandMore, MdFastfood, MdFavorite, MdMenu, MdNearMe} from "react-icons/md"
import style from "../deliveroo.module.css";
import {useState} from "react";
import Link from "next/link"
import {useRouter} from "next/router";

export default function Index() {

  const [address, setAddress] = useState("")
  const [couponCode, setCouponCode] = useState("")
  const [isAddressInvalid, setAddressValid] = useState(false)
  const [isCouponInvalid, setCouponValid] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingCoupon, setIsLoadingCoupon] = useState(false)
  const router = useRouter()

  const searchAddress = () => {
    setIsLoading(false)
    if(address == undefined || address.length < 3) {
      setAddressValid(true)
      return
    }
    setIsLoading(true)
    setTimeout(() => {
      router.push("/feliperoo/shop")
      // router.push({pathname:"/feliperoo/shop", query: {}})
    }, 1500)
  }

  const multiplyCode = () => {
    setIsLoadingCoupon(false)
    if(couponCode == undefined || couponCode.length < 3) {
      setCouponValid(true)
      return
    }

    setIsLoadingCoupon(true)

    fetch("/api/sendCoupon?couponCode=" + couponCode, {method: "POST"})
      .then(result => {
        alert("Congratulations!! Your Coupon was multiplied by 0!")
      })
      .catch(err => {
        alert("Something went wrong. Try later!")
      })

  }

  return (
    <Box>
      <Box className={style.MainBanner}>
        <Container maxWidth={"container.xl"}>
          <HStack pt={4} pb={2}>
            <Heading size={"md"} color={"white"}><Icon as={MdFastfood}/> Feliperoo</Heading>
            <Spacer/>
            <Flex gap={4} direction={{base: 'column', 'sm': 'row'}}>
              <CLink href="/feliperoo/register">
                <Button leftIcon={<MdExpandMore color={"#0aa195"}/>}>Partner with him?</Button>
              </CLink>
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
                    <Input
                      onChange={e => setAddress(e.target.value)}
                      value={address}
                      isInvalid={isAddressInvalid}
                      placeholder="Your fucking address"/>
                    <InputRightElement><MdNearMe color={"#0aa195"}/></InputRightElement>
                  </InputGroup>
                  <Button isLoading={isLoading} onClick={searchAddress} bgColor={"#00ccbc"} color={"white"}>Search</Button>
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
      <Box mt={10}>
        <VStack>
          <Heading size={"lg"}>Want to multiply a Coupon Code ?????</Heading>
          <VStack pt={6}>
            <Input onChange={e => setCouponCode(e.target.value)} placeholder="Insert your code :D" isInvalid={isCouponInvalid} />
            <Button onClick={multiplyCode} w={"full"} bgColor={"#00ccbc"} color={"white"}>Multiply!</Button>
          </VStack>
        </VStack>
      </Box>
      <Divider mt={6}/>
      <Center mt={20} pb={6}>
        <Text color={"gray"} fontSize={"sm"}>
          by </Text> <Link href={{pathname: "https://eriksonmurrugarra.com"}}>TuPapi</Link>
      </Center>
    </Box>
  )
}