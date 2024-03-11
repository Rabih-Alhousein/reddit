import { Box, Button, Flex, Icon, Image, Text } from "@chakra-ui/react";
import React from "react";
import { FaReddit } from "react-icons/fa";
import image from "../public/recCommsArt.png";

console.log({ image });
type RecommendationsProps = {};

const Recommendations: React.FC<RecommendationsProps> = () => {
  const communities = [
    {
      id: "reactjs",
      isJoined: true,
    },
    {
      id: "javascript",
      isJoined: false,
    },
    {
      id: "programming",
      isJoined: true,
    },
    {
      id: "webdev",
      imageURL: null,
      isJoined: false,
    },
    {
      id: "opensource",
      isJoined: true,
    },
  ];

  return (
    <Flex
      direction="column"
      bg="white"
      borderRadius={4}
      cursor="pointer"
      border="1px solid"
      borderColor="gray.300"
    >
      <Flex
        align="flex-end"
        color="white"
        p="6px 10px"
        bg="blue.500"
        height="70px"
        borderRadius="4px 4px 0px 0px"
        fontWeight={600}
        bgImage={image.src}
        backgroundSize="cover"
        bgGradient={`linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75)), url(${image.src})"`}
      >
        Top Communities
      </Flex>
      <Flex direction="column">
        {communities.map((item, index) => {
          return (
            <Flex
              position="relative"
              align="center"
              fontSize="10pt"
              borderBottom="1px solid"
              borderColor="gray.200"
              p="10px 12px"
              fontWeight={600}
            >
              <Flex width="80%" align="center">
                <Flex width="15%">
                  <Text mr={2}>{index + 1}</Text>
                </Flex>
                <Flex align="center" width="80%">
                  {item.imageURL ? (
                    <Image
                      borderRadius="full"
                      boxSize="28px"
                      src={item.imageURL}
                      mr={2}
                    />
                  ) : (
                    <Icon as={FaReddit} fontSize={30} color="#FF3C00" mr={2} />
                  )}
                  <span
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >{`r/${item.id}`}</span>
                </Flex>
              </Flex>
              <Box position="absolute" right="10px">
                <Button
                  height="22px"
                  fontSize="8pt"
                  variant={item?.isJoined ? "outline" : "solid"}
                >
                  {item?.isJoined ? "Joined" : "Join"}
                </Button>
              </Box>
            </Flex>
          );
        })}
        <Box p="10px 20px">
          <Button height="30px" width="100%">
            View All
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};
export default Recommendations;
