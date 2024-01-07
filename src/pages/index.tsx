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
import { usePostsQuery } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";
import { useState } from "react";

const Index = () => {
  const [variables, setVariables] = useState({
    limit: 10,
    cursor: null as string | null,
  });

  const [{ data, fetching }] = usePostsQuery({
    variables,
  });

  const { posts = [], hasMore = false } = data?.posts || {};

  const handlePagination = () => {
    setVariables({
      limit: variables.limit,
      cursor: posts[posts.length - 1].createdAt,
    });
  };

  return (
    <Layout>
      <Flex justifyContent={"space-between"}>
        <Heading>Reddit</Heading>
        <NextLink href="/create-post">
          <Link>Create Post</Link>
        </NextLink>
      </Flex>
      <br />
      {posts && fetching ? (
        <div>Loading...</div>
      ) : (
        <Stack spacing={6}>
          {posts.map((p) => (
            <Box key={p.id} p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">{p.title}</Heading>
              <Text mt={4}>{p.textSnippet}...</Text>
            </Box>
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
