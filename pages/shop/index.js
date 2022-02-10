import {AspectRatio, Box, Grid, Image, Link, Text} from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import Cart from "../../components/Cart";
import {useState} from "react";

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
  const [isCartOpen, setCartOpen] = useState(false);

  return (
    <Box>
      <Navbar onCartOpen={() => setCartOpen(true)} />
      <Grid templateColumns="repeat(4, 1fr)" gap={6} m={6}>
        {
          products.map(p =>
            <Box key={p.id}
                 boxShadow={"md"}
                 _hover={{opacity: '80%'}}
                 textAlign="center"
                 pb={2}>
              <Link href={`/shop/${p.id}`}>
                <AspectRatio ratio={1} borderBottomWidth={1}>
                  <Image src={p.image}/>
                </AspectRatio>
                <Text fontWeight={"bold"} mt={2}>{p.name}</Text>
                <Text fontSize={"sm"} color={"gray"}>{p.price}</Text>
              </Link>
            </Box>)
        }
      </Grid>
      <Cart isOpen={isCartOpen} onClose={() => setCartOpen(false)}/>
    </Box>

  )
}