import { Form, Formik } from "formik";
import React from "react";
import Wrapper from "../components/Wrapper";
import InputField from "../components/InputField";
import { Box, Button } from "@chakra-ui/react";
import { useLoginMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";
import { useRouter } from "next/router";
import { createUrqlClient } from "../utils/createUrqlClient";
import { withUrqlClient } from "next-urql";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import StyledBox from "../components/StyledBox";

interface loginProps {}

const Login: React.FC<loginProps> = ({}) => {
  const router = useRouter();
  const [, login] = useLoginMutation();

  const handleLoginResult = (result, setErrors) => {
    const loginResult = result.data?.login;

    if (loginResult?.errors) {
      setErrors(toErrorMap(loginResult.errors));
      return;
    }

    if (loginResult?.user) {
      const nextRoute =
        typeof router.query.next === "string" ? router.query.next : "/";
      router.push(nextRoute);
    }
  };

  return (
    <Wrapper variant="small">
      <StyledBox>
        <Formik
          initialValues={{ usernameOrEmail: "", password: "" }}
          onSubmit={async (values, { setErrors }) => {
            const result = await login(values);
            handleLoginResult(result, setErrors);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <InputField
                name="usernameOrEmail"
                placeholder="username or email"
                label="Username or Email"
                required
              />
              <Box my={4}>
                <InputField
                  name="password"
                  placeholder="password"
                  label="Password"
                  required
                />
              </Box>
              <NextLink href="/forgot-password">
                <Link>Forgot Password</Link>
              </NextLink>
              <Button
                mt={4}
                display="block"
                type="submit"
                colorScheme="teal"
                isLoading={isSubmitting}
              >
                Login
              </Button>
            </Form>
          )}
        </Formik>
      </StyledBox>
    </Wrapper>
  );
};

export default withUrqlClient(createUrqlClient)(Login);
