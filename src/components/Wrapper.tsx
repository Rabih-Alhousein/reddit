import { Box } from "@chakra-ui/react";
import React from "react";

export type WrapperVariant = "small" | "medium" | "regular";

interface wrapperProps {
  children: React.ReactNode;
  variant?: WrapperVariant;
}

const Wrapper: React.FC<wrapperProps> = ({ children, variant = "regular" }) => {
  const maxWidth = (() => {
    switch (variant) {
      case "regular":
        return 1200;
      case "medium":
        return 800;
      case "small":
        return 400;

      default:
        return 800;
    }
  })();

  return (
    <Box maxW={maxWidth} w="100%" mt={5} px={2} mx="auto">
      {children}
    </Box>
  );
};

export default Wrapper;
