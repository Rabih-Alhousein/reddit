import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { Post, PostsQuery } from "../generated/graphql";

interface UpvoteSectionProps {
  handleVote: (postId: number, value: number) => Promise<void>;
  post: PostsQuery["posts"]["posts"][0];
}

const UpvoteSection: React.FC<UpvoteSectionProps> = ({ handleVote, post }) => {
  const { points, id, voteStatus } = post;

  return (
    <Flex
      direction="column"
      alignItems="center"
      background="#f2f8fc"
      padding={5}
    >
      <IconButton
        size={"sm"}
        aria-label="Upvote"
        icon={<ChevronUpIcon />}
        onClick={() => handleVote(id, 1)}
        colorScheme={voteStatus === 1 ? "green" : undefined}
        background={voteStatus === 1 ? "green" : "white"}
        border="0.5px solid #b1b1b171"
      />
      <Text p={1}>{points}</Text>
      <IconButton
        size={"sm"}
        aria-label="Downvote"
        icon={<ChevronDownIcon />}
        onClick={() => handleVote(id, -1)}
        colorScheme={voteStatus === -1 ? "red" : undefined}
        background={voteStatus === -1 ? "red" : "white"}
        border="0.5px solid #b1b1b171"
      />
    </Flex>
  );
};

export default UpvoteSection;
