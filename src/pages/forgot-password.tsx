import { Box, Button } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { NextPage } from "next";
import { withUrqlClient } from "next-urql";
import { useState } from "react";
import InputField from "../components/InputField";
import StyledBox from "../components/StyledBox";
import Wrapper from "../components/Wrapper";
import { useForgotPasswordMutation } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";

interface ForgotPasswordProps {}

const ForgotPassword: NextPage<ForgotPasswordProps> = ({}) => {
  const [complete, setComplete] = useState(false);
  const [, forgotPassword] = useForgotPasswordMutation();
  return (
    <Wrapper variant="small">
      <StyledBox>
        <Formik
          initialValues={{ email: "" }}
          onSubmit={async (values) => {
            const result = await forgotPassword(values);
            if (result.data?.forgotPassword) {
              setComplete(true);
            }
          }}
        >
          {({ isSubmitting }) =>
            complete ? (
              <Box>We have sent you an email</Box>
            ) : (
              <Form>
                <InputField
                  name="email"
                  placeholder="email"
                  label="Email"
                  type="email"
                  required
                />
                <Button
                  mt={4}
                  type="submit"
                  colorScheme="teal"
                  isLoading={isSubmitting}
                >
                  Login
                </Button>
              </Form>
            )
          }
        </Formik>
      </StyledBox>
    </Wrapper>
  );
};

export default withUrqlClient(createUrqlClient)(ForgotPassword);
