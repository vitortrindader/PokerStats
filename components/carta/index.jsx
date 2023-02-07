import { Flex, Image, Select, Text } from "@chakra-ui/react";
import { useState } from "react";
import format from "../../utils/format";

export default function Carta({ card, setCard }) {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      gap="8px"
    >
      <Select
        onChange={(e) =>
          setCard((value) => ({ valor: e.target.value, tipo: value.tipo }))
        }
        value={card.valor}
      >
        <option value="1">A</option>
        <option value="13">K</option>
        <option value="12">Q</option>
        <option value="11">J</option>
        <option value="10">10</option>
        <option value="9">9</option>
        <option value="8">8</option>
        <option value="7">7</option>
        <option value="6">6</option>
        <option value="5">5</option>
        <option value="4">4</option>
        <option value="3">3</option>
        <option value="2">2</option>
      </Select>
      <Flex position="relative">
        <Flex
          top="48px"
          left="50%"
          transform="translate(-50%, -50%)"
          position="absolute"
        >
          <Text fontSize="5xl" color="white">
            {format(card.valor)}
          </Text>
        </Flex>
        <Image src="/images/carta1.png" alt="carta1" />
        <Flex
          bottom="0px"
          left="50%"
          transform="translate(-50%, -50%)"
          position="absolute"
        >
          <Image w="83" h="89" src={`/assets/${card.tipo}.png`} alt="tipo" />
        </Flex>
      </Flex>
      <Select
        onChange={(e) =>
          setCard((value) => ({ tipo: e.target.value, valor: value.valor }))
        }
        value={card.tipo}
      >
        <option value="Hearts">Copas</option>
        <option value="Spades">Espadas</option>
        <option value="Diamonds">Ouros</option>
        <option value="Clubs">Paus</option>
      </Select>
    </Flex>
  );
}
