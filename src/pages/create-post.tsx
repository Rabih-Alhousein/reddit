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
import StyledBox from "../components/StyledBox";

const createPost: React.FC<{}> = ({}) => {
  const router = useRouter();
  const [, createPost] = useCreatePostMutation();

  useIsAuth();

  return (
    <Layout variant="medium">
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
          <StyledBox>
            <Form>
              <InputField
                name="title"
                placeholder="title"
                label="Title"
                required
              />
              <Box my={4}>
                <InputField
                  name="text"
                  placeholder="text..."
                  label="Text"
                  textarea
                  required
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
          </StyledBox>
        )}
      </Formik>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient)(createPost);
