import React from "react";
import Wrapper, { WrapperVariant } from "./Wrapper";
import Navbar from "./Navbar";

interface LayoutProps {
  variant?: WrapperVariant;
  children: React.ReactNode;
  setVariables?: any;
}

const Layout: React.FC<LayoutProps> = ({ variant, children, setVariables }) => {
  return (
    <>
      <Navbar setVariables={setVariables} />
      <Wrapper variant={variant}>{children}</Wrapper>
    </>
  );
};

export default Layout;
