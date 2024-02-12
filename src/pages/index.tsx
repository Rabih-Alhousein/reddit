import { Button, Flex, Input, Stack } from "@chakra-ui/react";
import { withUrqlClient } from "next-urql";
import NextLink from "next/link";
import { useState } from "react";
import Layout from "../components/Layout";
import { usePostsQuery, useVoteMutation } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";
import Image from "next/image";
import profileUser from "../public/profile user.png";
import Post from "../components/Post";
import Sidebar from "../components/Sidebar";

const Index = () => {
  const [variables, setVariables] = useState({
    limit: 10,
    cursor: null as string | null,
    search: "",
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
      search: variables.search,
    });
  };

  const handleVote = async (postId: number, value: number) => {
    const result = await vote({ postId: postId, value });
    if (!result.error) {
    }
  };

  return (
    <Layout setVariables={setVariables}>
      <div className="bg-[#DAE0E6]">
        {posts && fetching ? (
          <div>Loading...</div>
        ) : (
          <Flex justifyContent="center" p={4} gap={5}>
            <div>
              <Stack spacing={6} pb={4}>
                <NextLink href="/create-post">
                  <Flex justifyContent="center" gap={3} p={3} bg="#FFFFFF">
                    <Image
                      src={profileUser}
                      alt="Reddit User"
                      width={40}
                      height={30}
                    />
                    <Input name="text" placeholder="Create New Post" />
                  </Flex>
                </NextLink>
                {posts.map((p) => (
                  <Post key={p.id} post={p} handleVote={handleVote} />
                ))}
              </Stack>
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
            </div>
            <Sidebar />
          </Flex>
        )}
      </div>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
