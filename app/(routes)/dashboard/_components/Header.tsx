import React from "react";
import Logo from "../../../_components/Logo";
import { UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <div className="flex justify-between p-3 shadow-sm align-center">
      <Logo />
      <UserButton />
    </div>
  );
};

export default Header;
