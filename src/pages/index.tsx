import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { withUrqlClient } from "next-urql";
import NextLink from "next/link";
import Layout from "../components/Layout";
import { usePostsQuery, useVoteMutation } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";
import { useState } from "react";
import UpvoteSection from "../components/UpvoteSection";
import { EditDeletePostButtons } from "../components/EditDeletePostButtons";

const Index = () => {
  const [variables, setVariables] = useState({
    limit: 10,
    cursor: null as string | null,
  });

  const [{ data, fetching }] = usePostsQuery({
    variables,
  });

  const [, vote] = useVoteMutation();

  const { posts = [], hasMore = false } = data?.posts || {};

  const handlePagination = () => {
    setVariables({
      limit: variables.limit,
      cursor: posts[posts.length - 1].createdAt,
    });
  };

  const handleVote = async (postId: number, value: number) => {
    console.log(value);
    const result = await vote({ postId: postId, value });
    if (!result.error) {
    }
  };

  return (
    <Layout>
      <Flex justifyContent={"space-between"}>
        <Heading>Reddit</Heading>
      </Flex>
      <br />
      {posts && fetching ? (
        <div>Loading...</div>
      ) : (
        <Stack spacing={6}>
          {posts.map((p) => (
            <Flex key={p.id} p={5} shadow="md" borderWidth="1px">
              <UpvoteSection handleVote={handleVote} post={p} />
              <Flex justifyContent="space-between" flex={1}>
                <Box>
                  <NextLink href="/page/[id]" as={`/page/${p.id}`}>
                    <Link>
                      <Heading fontSize="xl">{p.title}</Heading>
                    </Link>
                  </NextLink>
                  <Text>Post by {p.creator.username}</Text>
                  <Text mt={4}>{p.textSnippet}...</Text>
                </Box>
                <Box alignSelf={"flex-end"}>
                  <EditDeletePostButtons id={p.id} creatorId={p.creator.id} />
                </Box>
              </Flex>
            </Flex>
          ))}
        </Stack>
      )}
      {posts && hasMore ? (
        <Flex>
          <Button
            m="auto"
            my={8}
            colorScheme="teal"
            isLoading={fetching}
            onClick={handlePagination}
          >
            Load More
          </Button>
        </Flex>
      ) : null}
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
