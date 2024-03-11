import { Box, Button, Flex, Stack } from "@chakra-ui/react";
import { withUrqlClient } from "next-urql";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useState } from "react";
import Post from "../components/Post";
import Premium from "../components/Premium";
import Recommendations from "../components/Recommendations";
import Sidebar from "../components/Sidebar";
import CreatePostLink from "../components/createPostLink";
import {
  useMeQuery,
  usePostsQuery,
  useVoteMutation,
} from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";
const Layout = dynamic(() => import("../components/Layout"), { ssr: false });

const Index = () => {
  const router = useRouter();
  const [{ data: meData, fetching: meFetching }] = useMeQuery();

  const [variables, setVariables] = useState({
    limit: 10,
    cursor: null as string | null,
    search: "",
  });

  const [{ data, fetching }] = usePostsQuery({
    variables,
  });

  const { posts = [], hasMore = false } = data?.posts || {};

  const [, vote] = useVoteMutation();

  const handleVote = async (postId: number, value: number) => {
    if (!meData?.me && !meFetching) {
      router.push("/login");
    }

    await vote({ postId, value });
  };

  const handlePagination = () => {
    setVariables({
      limit: variables.limit,
      cursor: posts[posts.length - 1].createdAt,
      search: variables.search,
    });
  };

  return (
    <Layout setVariables={setVariables}>
      <div className="bg-[#DAE0E6]">
        <Flex justifyContent="center" p={4} gap={5}>
          <Box flex={1}>
            <CreatePostLink />
            <Stack spacing={2} pb={4}>
              {fetching ? (
                <Flex justifyContent="center" p={4}>
                  Loading...
                </Flex>
              ) : posts.length === 0 ? (
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
                  isLoading={fetching}
                >
                  Load More
                </Button>
              </Flex>
            ) : null}
          </Box>

          <Flex
            direction="column"
            position="sticky"
            maxWidth={"300px"}
            display={{ base: "none", md: "block" }}
          >
            <Sidebar />
            <Premium />
            <Recommendations />
          </Flex>
        </Flex>
      </div>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
