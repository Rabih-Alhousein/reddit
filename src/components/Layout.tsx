import React from "react";
import Wrapper, { WrapperVariant } from "./Wrapper";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("./Navbar"), { ssr: false });

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
