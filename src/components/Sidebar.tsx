import React from "react";
import { Button, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { FaReddit } from "react-icons/fa";
import { GrInProgress } from "react-icons/gr";
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
      cursor="pointer"
      border="1px solid"
      borderColor="gray.300"
      mb={4}
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
          <Text fontSize="14px">
            Your personal Reddit frontpage. Come here to check in with your
            favorite communities.
          </Text>

          <Button
            height="30px"
            bg="#0079D3"
            _hover={{ bg: "#3f92d1" }}
            color="#ffffff"
            borderRadius={50}
            onClick={() => {
              router.push("/create-post");
            }}
          >
            Create Post
          </Button>

          <Button
            variant="outline"
            height="30px"
            color="#0079D3"
            borderColor="#0079D3"
            borderRadius={50}
            rightIcon={<Icon as={GrInProgress} />}
            isDisabled
          >
            Create Community
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
};
export default Sidebar;
