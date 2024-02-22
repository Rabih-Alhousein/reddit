import { Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import React from "react";
import { useMeQuery } from "../generated/graphql";
import RedditImg from "../public/reddit icon.jpg";
import { isServer } from "../utils/isServer";
import AuthButtons from "./Navbar/AuthButtons";
import ActionIcons from "./Navbar/Icons";
import MenuWrapper from "./Navbar/MenuWrapper";
import SearchInput from "./searchInput";

interface NavbarProps {
  setVariables?: any;
}

const Navbar: React.FC<NavbarProps> = ({ setVariables }) => {
  const [{ data, fetching }] = useMeQuery({
    pause: isServer(),
  });

  let body = null;

  // data is loading
  if (fetching) {
    body = <div>Loading...</div>;
    // user not logged in
  } else {
    body = (
      <Flex w="98%" margin="auto" padding={2} justifyContent="space-between">
        <NextLink href={"/"}>
          <Flex
            alignItems="center"
            gap={3}
            marginRight={{ base: "15px", md: "none" }}
          >
            <Image src={RedditImg} alt="Reddit" width={32} height={32} />
            <Heading
              color="#ff4500"
              fontSize={25}
              fontWeight={"extrabold"}
              display={{ base: "none", md: "block" }}
            >
              reddit
            </Heading>
          </Flex>
        </NextLink>
        {/* <SearchInput
          onChange={(e) =>
            setVariables({
              limit: 10,
              cursor: null,
              search: e.target.value,
            })
          }
        /> */}
        <Flex justifyContent="space-between" alignItems="center">
          {data?.me ? (
            <>
              <ActionIcons />
              <MenuWrapper />
            </>
          ) : (
            <AuthButtons />
          )}
        </Flex>
      </Flex>
    );
  }

  return (
    <Flex
      bg="#FFFFFF"
      justifyContent={"flex-end"}
      position="sticky"
      top={0}
      zIndex={99}
    >
      {body}
    </Flex>
  );
};

export default Navbar;
