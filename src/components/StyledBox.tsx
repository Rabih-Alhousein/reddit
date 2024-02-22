import { Box } from "@chakra-ui/react";
import React from "react";

interface StyledBoxProps {
  children: React.ReactNode;
}

const StyledBox: React.FC<StyledBoxProps> = ({ children }) => {
  return (
    <Box
      bg={"white"}
      p={8}
      borderRadius={8}
      boxShadow="md"
      m={{
        base: 4,
        lg: 0,
      }}
    >
      {children}
    </Box>
  );
};

export default StyledBox;
