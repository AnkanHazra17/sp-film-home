import Image from "next/image";
import React from "react";
import CustomNavigationMenu from "./CustomNavigationMenu";
import { navItems } from "@/constants/data";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import MobileNavBar from "./MobileNavBar";

const shoppingNavItem = {
  label: "Coated products",
  subNavItems: [
    {
      subLabel: "TPU heat repair protective film (full roll)",
    },
    {
      subLabel: "Headlight protective film (full roll)",
    },
    {
      subLabel: "Color changing film (full roll)",
    },
    {
      subLabel: "Film application tools",
    },
  ],
};

const NavBar = () => {
  return (
    <div className="w-full flex items-center justify-between px-16 h-20 border-b sticky top-0 z-50 bg-white">
      <Image
        src="https://www.surfacepro.com.tw/uploads/use/20231116131503d795.png"
        alt="logo"
        width={150}
        height={100}
      ></Image>

      <div className="hidden lg:flex gap-1 items-center">
        {navItems.map((item, i) => (
          <CustomNavigationMenu
            key={i}
            label={item.label}
            subLabels={item.subNavItems}
          ></CustomNavigationMenu>
        ))}
      </div>

      <div className="flex lg:hidden">
        <MobileNavBar></MobileNavBar>
      </div>
    </div>
  );
};

export default NavBar;
