import React from "react";
import { Button, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { FaReddit } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";
import image from "../public/redditPersonalHome.png";

const Sidebar: React.FC = () => {
  const router = useRouter();
  return (
    <Flex
      direction="column"
      bg="white"
      borderRadius={4}
      border="1px solid"
      pb={3}
      borderColor="gray.300"
      position="sticky"
      height={"fit-content"}
    >
      <Flex
        align="flex-end"
        color="white"
        p="6px 10px"
        bg="blue.500"
        height="34px"
        borderRadius="4px 4px 0px 0px"
        fontWeight={600}
        bgImage={image.src}
        backgroundSize="cover"
      ></Flex>
      <Flex direction="column" p={5}>
        <Flex align="center" mb={2}>
          <Icon as={FaReddit} fontSize={50} color="brand.100" mr={2} />
          <Link href="/">
            <Text fontWeight={600}>Home</Text>
          </Link>
        </Flex>
        <Stack spacing={3}>
          <Text fontSize="9pt">
            Your personal Reddit frontpage, built for you.
          </Text>

          <Button
            height="30px"
            color="#ff4500"
            onClick={() => {
              router.push("/create-post");
            }}
          >
            Create Post
          </Button>

          <Button variant="outline" height="30px">
            Create Community
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
};
export default Sidebar;
