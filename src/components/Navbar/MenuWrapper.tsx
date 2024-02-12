import React, { useState } from "react";

import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  Text,
} from "@chakra-ui/react";

import NoUserList from "./NoUserList";
import UserList from "./UserList";

import { FaRedditSquare } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { IoSparkles } from "react-icons/io5";
import { useMeQuery } from "../../generated/graphql";
import { isServer } from "../../utils/isServer";

type MenuWrapperProps = {};

const MenuWrapper: React.FC<MenuWrapperProps> = () => {
  const [authModal, setModalState] = useState();
  const [{ data, fetching }] = useMeQuery({
    pause: isServer(),
  });

  const user = data?.me;

  return (
    <Menu>
      <MenuButton
        cursor="pointer"
        padding="0px 6px"
        borderRadius="4px"
        _hover={{ outline: "1px solid", outlineColor: "gray.200" }}
      >
        <Flex alignItems="center">
          <Flex alignItems="center">
            <Icon fontSize={24} mr={1} color="gray.300" as={FaRedditSquare} />
            <Box
              display={{ base: "none", lg: "flex" }}
              flexDirection="column"
              fontSize="8pt"
              alignItems="flex-start"
              mr={8}
            >
              <Text fontWeight={700}>{user.username}</Text>
              <Flex alignItems="center">
                <Icon as={IoSparkles} color="brand.100" mr={1} />
                <Text color="gray.400">1 karma</Text>
              </Flex>
            </Box>
          </Flex>
          <ChevronDownIcon color="gray.500" />
        </Flex>
      </MenuButton>

      <MenuList>
        <UserList />
      </MenuList>
    </Menu>
  );
};
export default MenuWrapper;
