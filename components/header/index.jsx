import { Flex, Heading, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex w="40%" direction="column" align="center" gap="10px">
      <Flex>
        <Heading fontWeight="medium" w="1/2" color="white" size="2xl">
          Poker
        </Heading>
        <Heading fontWeight="bold" w="1/2" color="#FF523A" size="2xl">
          Stats
        </Heading>
      </Flex>
      <Flex w="50%">
        <Text fontWeight="semibold" color="white" textAlign="center">
          Verifique qual sua chance de ganhar um jogo de Poker a partir da sua
          mão de entrada!
        </Text>
      </Flex>
    </Flex>
  );
}
