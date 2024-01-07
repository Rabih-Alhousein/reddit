import { withUrqlClient } from "next-urql";
import React from "react";
import { createUrqlClient } from "../../utils/createUrqlClient";
import { useRouter } from "next/router";
import { usePostQuery } from "../../generated/graphql";
import { Heading, Text } from "@chakra-ui/react";
import Layout from "../../components/Layout";
import { EditDeletePostButtons } from "../../components/EditDeletePostButtons";

const Page: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const intId = typeof id === "string" ? parseInt(id) : -1;
  const [{ data, fetching }] = usePostQuery({
    pause: intId === -1,
    variables: {
      postId: intId,
    },
  });

  console.log({ data });

  if (fetching) {
    return <Layout>Loading...</Layout>;
  }

  return (
    <Layout>
      <Heading mb={4}>{data.post.title}</Heading>
      <Text mb={4}>{data.post.text}</Text>
      <EditDeletePostButtons
        id={data.post.id}
        creatorId={data.post.creator.id}
      />
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Page);
