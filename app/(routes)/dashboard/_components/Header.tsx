"use client";
import React from "react";
import Logo from "../../../_components/Logo";
import { UserButton, OrganizationSwitcher, useAuth } from "@clerk/nextjs";

const Header = () => {
  const { orgId } = useAuth();
  console.log(orgId);
  return (
    <div className="flex justify-between p-3 shadow-sm align-center">
      <Logo />
      <OrganizationSwitcher
        afterLeaveOrganizationUrl={"/dashboard"}
        afterCreateOrganizationUrl={"/dashboard"}
      />
      <UserButton />
    </div>
  );
};

export default Header;
