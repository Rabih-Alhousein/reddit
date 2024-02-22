import { Box } from "@chakra-ui/react";
import React from "react";

export type WrapperVariant = "small" | "regular";

interface wrapperProps {
  children: React.ReactNode;
  variant?: WrapperVariant;
}

const Wrapper: React.FC<wrapperProps> = ({ children, variant = "regular" }) => {
  const maxWidth = variant === "regular" ? 1000 : 400;

  return (
    <Box maxW={maxWidth} w="100%" mt={5} px={2} mx="auto">
      {children}
    </Box>
  );
};

export default Wrapper;
