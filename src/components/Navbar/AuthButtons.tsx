import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

type AuthButtonsProps = {};

const AuthButtons: React.FC<AuthButtonsProps> = () => {
  const router = useRouter();

  return (
    <>
      <Button
        variant="outline"
        height="28px"
        display={{ sm: "flex" }}
        width={{ base: "90px", md: "110px" }}
        mr={2}
        onClick={() => router.push("./login")}
      >
        Log In
      </Button>
      <Button
        variant="solid"
        height="28px"
        display={{ sm: "flex" }}
        width={{ base: "90px", md: "110px" }}
        mr={2}
        onClick={() => router.push("./register")}
      >
        Sign Up
      </Button>
    </>
  );
};
export default AuthButtons;
