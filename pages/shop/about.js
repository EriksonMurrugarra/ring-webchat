import ShopLayout from "../../components/shop/ShopLayout";
import {Container, Divider, Heading, List, ListItem, Text} from "@chakra-ui/react";

// aca todo lo client side
function About(props) {
  const values = props.values

  return (
    <ShopLayout>
      <Container mt={10}>
        <Heading>About Us</Heading>
        <Text fontSize={"xl"}>We are ninjas who sale stuff for the new generation.</Text>

        <Heading mt={10} fontSize={"xl"}>Out Values</Heading>
        <List>
          {values.map(v => <ListItem key={v}><Text>{v}</Text></ListItem>)}
        </List>
      </Container>
    </ShopLayout>)
}

// Hacer vainas en el server side sin problema CUANDO SE HACE EL BUILD
// Poner aca cosas como categorias o secciones dinamicas de la pagina en tiempo de build.
export async function getStaticProps(context) {
  // TRAER ALGO

  // if no hay return { notFound: true }

  // redirect { redirect: { destination: '/otro-lado' } }

  return {
    props: { values: ["Respect", "Love"]},
    revalidate: 10,
    notFound: false, // si lo que traes no trae nada puedes ponerle true
  }
  // revalidate para recrear cada 10 segundos como cache. in dev siempre se muestra lo nuevo
  // con revalidate la pagina se va a construir cada X segundos y servir como estatica.
}

export default About