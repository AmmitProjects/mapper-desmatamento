import { Flex, Heading} from "@chakra-ui/react";

export function Header(){

  return (
      <Flex align="center">
        <Flex direction="column" justify="center" p="5">
          <Heading size="md">Mapper Desmatamento</Heading>
        </Flex>
      </Flex>
  )
}