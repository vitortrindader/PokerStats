import { Button, Flex, Heading, Image, Input, Text } from "@chakra-ui/react";
import React from "react";
import { queryOdds } from "../../utils/query";
import Carta from "../carta";
import Simular from "../simular";

export default function Table() {
  const [carta1, setCarta1] = React.useState({ valor: "4", tipo: "Clubs" });
  const [carta2, setCarta2] = React.useState({ valor: "4", tipo: "Clubs" });
  const [valores, setValores] = React.useState("");

  console.log(valores);
  return (
    <>
      <Flex
        boxShadow="0px 0px 15px rgba(255, 255, 255, 0.3), 0px 0px 30px rgba(255, 255, 255, 0.3)"
        backgroundColor="#272625"
        rounded="full"
        minH="40vh"
        width="50%"
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <Flex
          backgroundColor="#F2F2F2"
          rounded="full"
          minH="36vh"
          width="95%"
          gap="2%"
          justifyContent="center"
          padding="20px"
        >
          <Flex justifyContent="center" width="25%" minH="70%">
            <Flex
              justifyContent="center"
              alignItems="center"
              direction="column"
            >
              <Text fontWeight="semibold" mb="8px">
                Jogadores: {6}
              </Text>
              <Input
                width="90%"
                value={6}
                placeholder="Quantos jogadores?"
                size="sm"
              />
            </Flex>
          </Flex>
          <Flex width="40%" minH="70%" justifyContent="center">
            <Flex gap="8px" alignItems="center" justifyContent="center">
              <Carta card={carta1} setCard={setCarta1} />
              <Carta card={carta2} setCard={setCarta2} />
            </Flex>
          </Flex>
          <Flex width="25%" minH="70%" justifyContent="center">
            <Flex
              alignItems="center"
              justifyContent="center"
              direction="column"
            >
              <Text fontWeight="semibold">Chance de Vitória</Text>
              <Heading fontWeight="bold" size="2xl" color="#60A348">
                {valores}%
              </Heading>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex align="center" justifyContent="center">
        <Button
          onClick={() => setValores(queryOdds(carta1, carta2))}
          minWidth="20rem"
          size="lg"
          variant="solid"
          bg="#FF523A"
          color="white"
          fontWeight="bold"
        >
          SIMULAR
        </Button>
      </Flex>
    </>
  );
}
