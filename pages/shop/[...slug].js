import {Box, Text} from "@chakra-ui/react";
import {useRouter} from 'next/router'

export default function ProductDetailSlug() {
  const router = useRouter()
  console.log(router.query)

  return (
    <Box>
      <Text>Algo me vende SLUG</Text>
    </Box>

  )
}