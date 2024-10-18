import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SquareMenu } from "lucide-react";
import Image from "next/image";
import { navItems } from "@/constants/data";
import CustomNavigationMenu from "./CustomNavigationMenu";

const MobileNavBar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <SquareMenu className="h-8 w-8"></SquareMenu>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex flex-col gap-6 mt-4">
          <Image
            src="https://www.surfacepro.com.tw/uploads/use/20231116131503d795.png"
            alt="logo"
            width={150}
            height={100}
          ></Image>

          <div className="flex flex-col gap-1 items-start">
            {navItems.map((item, i) => (
              <CustomNavigationMenu
                key={i}
                label={item.label}
                subLabels={item.subNavItems}
              ></CustomNavigationMenu>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavBar;
