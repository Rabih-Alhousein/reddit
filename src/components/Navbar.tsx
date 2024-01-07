import { Box, Button, Flex, Heading, Link } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { useLogoutMutation, useMeQuery } from "../generated/graphql";
import { isServer } from "../utils/isServer";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  const [{ data, fetching }] = useMeQuery({
    pause: isServer(),
  });
  const [{ fetching: logoutFetching }, logout] = useLogoutMutation();

  let body = null;

  // data is loading
  if (fetching) {
    body = <div>Loading...</div>;
    // user not logged in
  } else if (!data?.me) {
    body = (
      <div>
        <NextLink href={"/login"}>
          <Link mr={4}>Login</Link>
        </NextLink>
        <NextLink href={"/register"}>
          <Link>Register</Link>
        </NextLink>
      </div>
    );
    // user is logged in
  } else {
    body = (
      <Flex w={800} margin="auto" justifyContent="space-between">
        <Heading>Reddit</Heading>
        <Flex alignItems="center">
          <NextLink href={"/create-post"}>
            <Button as={Link} mr={6} size={"sm"}>
              Create Post
            </Button>
          </NextLink>
          <Flex alignItems="center">
            <Box mr={4}>{data.me.username}</Box>
            <Button
              variant="link"
              onClick={() => {
                logout({});
              }}
              isLoading={logoutFetching}
            >
              Logout
            </Button>
          </Flex>
        </Flex>
      </Flex>
    );
  }

  return (
    <Flex
      bg="tan"
      p={4}
      justifyContent={"flex-end"}
      position="sticky"
      zIndex={99}
    >
      {body}
    </Flex>
  );
};

export default Navbar;
