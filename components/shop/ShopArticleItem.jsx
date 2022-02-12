import {AspectRatio, Box, Image, Text} from "@chakra-ui/react";
import Link from "next/link"

export default function ShopArticleItem(props) {
  const detailUrl = `/shop/${props.id}`
  const image = props.image
  const name = props.name
  const price = props.price

  return (
    <Link href={detailUrl} passHref>
      <Box
        boxShadow={"md"}
        cursor={"pointer"}
        w={"full"}
        _hover={{opacity: '80%'}}
        textAlign="center"
        pb={2}>
        <AspectRatio ratio={1} borderBottomWidth={1}>
          <Image alt={"algo"} src={image}/>
        </AspectRatio>
        <Text fontWeight={"bold"} mt={2}>{name}</Text>
        <Text fontSize={"sm"} color={"gray"}>{price}</Text>

      </Box>
    </Link>
  )
}