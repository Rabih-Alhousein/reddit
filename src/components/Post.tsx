import { Box, Flex, Link, Text } from "@chakra-ui/react";
import moment from "moment";
import NextLink from "next/link";
import React from "react";
import { PostsQuery } from "../generated/graphql";
import PostActionButtons from "./PostActionButtons";
import UpvoteSection from "./UpvoteSection";

interface Props {
  handleVote: (postId: number, value: number) => Promise<void>;
  post: PostsQuery["posts"]["posts"][0];
}

const YourComponent: React.FC<Props> = ({ handleVote, post }) => {
  return (
    <Flex shadow="md" borderWidth="1px" bg="#FFFFFF">
      <UpvoteSection handleVote={handleVote} post={post} />
      <Flex direction={"column"} gap={2}>
        <Box p={4}>
          <Flex align="center" gap={2}>
            <NextLink href="/page/[id]" as={`/page/${post.id}`}>
              <Link>
                <Text fontSize="12pt" fontWeight={600}>
                  {post.title}
                </Text>
              </Link>
            </NextLink>
            <Text color="gray.500" fontSize={10}>
              Posted by u/{post.creator.username}{" "}
              {moment(new Date(post.createdAt * 1000)).fromNow()}
            </Text>
          </Flex>
          <Text fontSize="10pt" mt={4}>
            {post.textSnippet}...
          </Text>
        </Box>
        <Box p={2}>
          <PostActionButtons postId={post.id} creatorId={post.creator.id} />
        </Box>
      </Flex>
    </Flex>
  );
};

export default YourComponent;
