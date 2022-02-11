import {Box, Button, Center, Container, Heading, Image, SimpleGrid, Text, VStack} from "@chakra-ui/react";
import {useRouter} from 'next/router'
import {getArticle} from "../../data/ShopDataClient";
import ShopNavbar from "../../components/shop/ShopNavbar";
import ShopLayout from "../../components/shop/ShopLayout";

export default function ProductDetail() {
  const router = useRouter()
  const {productId} = router.query
  const data = getArticle(productId)
  console.log(productId, data)

  if (!data)
    return <ShopLayout><Center><Heading>...</Heading></Center></ShopLayout>

  return (
    <ShopLayout>
      <Container maxW={"container.xl"} mt={10}>
        <SimpleGrid columns={[1, 2]} gap={6}>
          <Box>
            <Image src={data.image}/>
          </Box>
          <VStack
            bg={"gray.50"} spacing={6} alignItems={"start"} p={6}>
            <Heading>{data.name}</Heading>
            <Text>{data.description}</Text>
            <Heading fontSize={"lg"}>{data.price}</Heading>
            <Button colorScheme={"cyan"} w={"full"}>Add to Cart</Button>
          </VStack>
        </SimpleGrid>
      </Container>
    </ShopLayout>
  )
}