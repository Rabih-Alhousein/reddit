import React from "react";
import { Flex, Box, Heading, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import UpvoteSection from "./UpvoteSection";
import PostActionButtons from "./PostActionButtons";
import { PostsQuery } from "../generated/graphql";

interface Props {
  handleVote: (postId: number, value: number) => Promise<void>;
  post: PostsQuery["posts"]["posts"][0];
}

const YourComponent: React.FC<Props> = ({ handleVote, post }) => {
  return (
    <Flex key={post.id} shadow="md" borderWidth="1px" bg="#FFFFFF">
      <UpvoteSection handleVote={handleVote} post={post} />
      <Flex justifyContent="space-between" flex={1} p={5}>
        <Box>
          <NextLink href="/page/[id]" as={`/page/${post.id}`}>
            <Link>
              <Heading fontSize="xl">{post.title}</Heading>
            </Link>
          </NextLink>
          <Text>Post by {post.creator.username}</Text>
          <Text mt={4}>{post.textSnippet}...</Text>
        </Box>
        <Box alignSelf={"flex-end"}>
          <PostActionButtons id={post.id} creatorId={post.creator.id} />
        </Box>
      </Flex>
    </Flex>
  );
};

export default YourComponent;
