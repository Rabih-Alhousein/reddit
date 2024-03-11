import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Flex, Icon, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { Post, PostsQuery } from "../generated/graphql";
import {
  IoArrowDownCircleSharp,
  IoArrowUpCircleOutline,
  IoArrowUpCircleSharp,
  IoArrowDownCircleOutline,
} from "react-icons/io5";

interface UpvoteSectionProps {
  handleVote: (postId: number, value: number) => Promise<void>;
  post: PostsQuery["posts"]["posts"][0];
}

const UpvoteSection: React.FC<UpvoteSectionProps> = ({ handleVote, post }) => {
  const { points, id, voteStatus } = post;
  const singlePostView = false;

  return (
    // <Flex
    //   direction="column"
    //   alignItems="center"
    //   background="#f2f8fc"
    //   padding={5}
    // >
    //   <IconButton
    //     size={"sm"}
    //     aria-label="Upvote"
    //     icon={<ChevronUpIcon />}
    //     onClick={() => handleVote(id, 1)}
    //     colorScheme={voteStatus === 1 ? "green" : undefined}
    //     background={voteStatus === 1 ? "green" : "white"}
    //     border="0.5px solid #b1b1b171"
    //   />
    //   <Text p={1}>{points}</Text>
    //   <IconButton
    //     size={"sm"}
    //     aria-label="Downvote"
    //     icon={<ChevronDownIcon />}
    //     onClick={() => handleVote(id, -1)}
    //     colorScheme={voteStatus === -1 ? "red" : undefined}
    //     background={voteStatus === -1 ? "red" : "white"}
    //     border="0.5px solid #b1b1b171"
    //   />
    // </Flex>
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
        {post.voteStatus || 0}
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
