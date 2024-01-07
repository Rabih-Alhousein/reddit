import { Heading, Text } from "@chakra-ui/react";
import { withUrqlClient } from "next-urql";
import React from "react";
import PostActionButtons from "../../components/PostActionButtons";
import Layout from "../../components/Layout";
import { usePostQuery } from "../../generated/graphql";
import { createUrqlClient } from "../../utils/createUrqlClient";
import { useGetIntId } from "../../utils/useGetIntId";

const Page: React.FC = () => {
  const intId = useGetIntId();
  const [{ data, fetching }] = usePostQuery({
    pause: intId === -1,
    variables: {
      postId: intId,
    },
  });

  if (fetching) {
    return <Layout>Loading...</Layout>;
  }

  return (
    <Layout>
      <Heading mb={4}>{data.post.title}</Heading>
      <Text mb={4}>{data.post.text}</Text>
      <PostActionButtons id={data.post.id} creatorId={data.post.creator.id} />
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Page);
