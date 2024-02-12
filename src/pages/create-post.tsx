import { Box, Button } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import React from "react";
import InputField from "../components/InputField";
import Layout from "../components/Layout";
import { useCreatePostMutation } from "../generated/graphql";
import { useIsAuth } from "../hooks/useIsAuth";
import { createUrqlClient } from "../utils/createUrqlClient";

const createPost: React.FC<{}> = ({}) => {
  const router = useRouter();
  const [, createPost] = useCreatePostMutation();

  useIsAuth();

  return (
    <Layout variant="small">
      <Formik
        initialValues={{ title: "", text: "" }}
        onSubmit={async (values, { setErrors }) => {
          const { data } = await createPost({ input: values });

          if (data) {
            router.push("/");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Box bg={"white"} p={8} borderRadius={8} boxShadow="md">
            <Form>
              <InputField name="title" placeholder="title" label="Title" />
              <Box my={4}>
                <InputField
                  name="text"
                  placeholder="text..."
                  label="Text"
                  textarea
                />
              </Box>

              <Button
                mt={4}
                display="block"
                type="submit"
                colorScheme="teal"
                isLoading={isSubmitting}
              >
                Create Post
              </Button>
            </Form>
          </Box>
        )}
      </Formik>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient)(createPost);
