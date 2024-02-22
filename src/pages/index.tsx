import { Box, Button, Flex, Icon, Input, Stack } from "@chakra-ui/react";
import { withUrqlClient } from "next-urql";
import dynamic from "next/dynamic";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { FaRedditSquare } from "react-icons/fa";
import Post from "../components/Post";
import Sidebar from "../components/Sidebar";
import { usePostsQuery, useVoteMutation } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";
const Layout = dynamic(() => import("../components/Layout"), { ssr: false });

const Index = () => {
  const [variables, setVariables] = useState({
    limit: 10,
    cursor: null as string | null,
    search: "",
  });

  const [{ data }] = usePostsQuery({
    variables,
  });

  const { posts = [], hasMore = false } = data?.posts || {};

  const [, vote] = useVoteMutation();

  const handleVote = async (postId: number, value: number) => {
    await vote({ postId, value });
  };

  const handlePagination = () => {
    setVariables({
      limit: variables.limit,
      cursor: posts[posts.length - 1].createdAt,
      search: variables.search,
    });
  };

  const CreatePost = () => (
    <NextLink href="/create-post">
      <Flex justifyContent="center" gap={3} p={3} bg="#FFFFFF" mb={5}>
        <Icon
          fontSize={44}
          color="gray.300"
          as={FaRedditSquare}
          borderRadius="100%"
        />

        <Input name="text" placeholder="Create New Post" />
      </Flex>
    </NextLink>
  );

  return (
    <Layout setVariables={setVariables}>
      <div className="bg-[#DAE0E6]">
        <Flex justifyContent="center" p={4} gap={5}>
          <Box flex={1}>
            <CreatePost />
            <Stack spacing={2} pb={4}>
              {posts.length === 0 ? (
                <Flex justifyContent="center" p={4}>
                  No posts found
                </Flex>
              ) : (
                posts.map((p) => (
                  <Post key={p.title} post={p} handleVote={handleVote} />
                ))
              )}
            </Stack>
            {posts && hasMore ? (
              <Flex>
                <Button
                  m="auto"
                  my={8}
                  colorScheme="teal"
                  onClick={handlePagination}
                >
                  Load More
                </Button>
              </Flex>
            ) : null}
          </Box>
          <Sidebar />
        </Flex>
      </div>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
