import React from "react";
import { Flex, Icon, Text, Stack, Button } from "@chakra-ui/react";
import { GiCheckedShield } from "react-icons/gi";

const Premium: React.FC = () => {
  return (
    <Flex
      direction="column"
      bg="white"
      borderRadius={4}
      cursor="pointer"
      p="12px"
      border="1px solid"
      borderColor="gray.300"
      mb={4}
    >
      <Flex mb={2}>
        <Icon as={GiCheckedShield} fontSize={26} color="#FF3C00" mt={2} />
        <Stack spacing={1} fontSize="9pt" pl={2}>
          <Text fontWeight={600}>Reddit Premium</Text>
          <Text>The best Reddit experience, with monthly Coins</Text>
        </Stack>
      </Flex>
      <Button
        height="30px"
        bg="#FF3C00"
        color="white"
        _hover={{ bg: "#fa6638" }}
      >
        Try Now
      </Button>
    </Flex>
  );
};
export default Premium;
