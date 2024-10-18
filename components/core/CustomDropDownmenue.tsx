import React from "react";
import { DropdownMenu, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { CustomNavMenueProps } from "./CustomNavigationMenu";

const CustomDropDownmenue = ({ label }: CustomNavMenueProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{label}</DropdownMenuTrigger>
    </DropdownMenu>
  );
};

export default CustomDropDownmenue;
