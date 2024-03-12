import { Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import {
  IoArrowDownCircleOutline,
  IoArrowDownCircleSharp,
  IoArrowUpCircleOutline,
  IoArrowUpCircleSharp,
} from "react-icons/io5";
import { PostsQuery } from "../generated/graphql";

interface UpvoteSectionProps {
  handleVote: (postId: number, value: number) => Promise<void>;
  post: PostsQuery["posts"]["posts"][0];
}

const UpvoteSection: React.FC<UpvoteSectionProps> = ({ handleVote, post }) => {
  const { points, id, voteStatus } = post;
  const singlePostView = false;
  return (
    <Flex
      direction="column"
      align="center"
      bg={singlePostView ? "none" : "gray.100"}
      p={2}
      width="48px"
      borderRadius={singlePostView ? "0" : "3px 0px 0px 3px"}
    >
      <Icon
        as={voteStatus === 1 ? IoArrowUpCircleSharp : IoArrowUpCircleOutline}
        color={voteStatus === 1 ? "#D93A00" : "gray.400"}
        fontSize={28}
        cursor="pointer"
        onClick={() => handleVote(id, 1)}
      />
      <Text fontSize="9pt" fontWeight={600}>
        {post.points || 0}
      </Text>
      <Icon
        as={
          voteStatus === -1 ? IoArrowDownCircleSharp : IoArrowDownCircleOutline
        }
        color={voteStatus === -1 ? "#6A5CFF" : "gray.400"}
        fontSize={28}
        cursor="pointer"
        onClick={() => handleVote(id, -1)}
      />
    </Flex>
  );
};

export default UpvoteSection;
