import { Box } from "@chakra-ui/react";
import React from "react";

interface wrapperProps {
  children: React.ReactNode;
  variant?: "small" | "regular";
}

const Wrapper: React.FC<wrapperProps> = ({ children, variant = "regular" }) => {
  const maxWidth = variant === "regular" ? 800 : 400;

  return (
    <Box maxW={maxWidth} w="100%" mt={8} px={2} mx="auto">
      {children}
    </Box>
  );
};

export default Wrapper;
