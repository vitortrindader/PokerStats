import { Flex } from "@chakra-ui/react";
import Header from "../components/header";
import Simular from "../components/simular";
import Table from "../components/table";

export default function Home() {
  return (
    <Flex
      paddingTop="50px"
      backgroundColor="#424242"
      minH="100vh"
      direction="column"
      align="center"
      gap="50px"
    >
      <Header />
      <Table />
    </Flex>
  );
}
