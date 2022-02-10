import {AspectRatio, HStack, Box, Grid, Image, Link, Text} from "@chakra-ui/react";
import Navbar from "../../components/Navbar";

const products = [{
  id: "id1",
  name: "Kit Shinobi #1",
  price: "€29.99",
  description: "This kid is required if you want to be part of Shinobi Alliance.",
  image: "tool1.jpg"
},
  {
    id: "id2",
    name: "Konoha Gloves",
    price: "€9.99",
    description: "Protect your hands with this amazing gloves for Konoha ninjas. Only via internet.",
    image: "tool2.jpg"
  },
  {
    id: "id3",
    name: "Vincha Hoja",
    price: "€19.49",
    description: "Only for graduate students with Genin level.",
    image: "tool3.jpg"
  },
  {
    id: "id4",
    name: "Kunai Vintage",
    price: "€109.49",
    description: "Vintage kunai from Hokages and top level ninjas.",
    image: "tool4.jpg"
  }]

export default function Index() {
  return (
    <Box>
      <Navbar/>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {
          products.map(p =>
            <Box key={p.id} _hover={{opacity: '80%'}} textAlign="center">
              <Link href={`/shop/${p.id}`}>
                <AspectRatio ratio={1}>
                  <Image src={p.image}/>
                </AspectRatio>
                <Text>{p.price}</Text>
                <Text>{p.name}</Text>
              </Link>
            </Box>)
        }
      </Grid>
    </Box>

  )
}