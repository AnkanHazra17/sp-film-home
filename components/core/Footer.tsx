import React from "react";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <div className="w-full bg-slate-800 px-16">
      <div className="text-white py-10 flex flex-col items-center gap-2 border-b">
        <p>
          G-THINK TECH LTD. Address: 2nd Floor, No. 163, Wenzhong Road, Taoyuan
          District
        </p>
        <p>LINE: @spfilm_ppf</p>
        <p>Tel: 03-369 9957</p>
        <p>AM10:30~PM19:00</p>
      </div>

      <div className="text-white py-10 flex flex-col items-center gap-2 border-b">
        <div className="flex flex-wrap items-center">
          <Button variant="link" className="text-white">
            Taoyuan Car Wrap
          </Button>
          <Button variant="link" className="text-white">
            Taoyuan Rhino Leather Brand
          </Button>
          <Button variant="link" className="text-white">
            car body color changing Wrap
          </Button>
          <Button variant="link" className="text-white">
            Disclaimer
          </Button>
        </div>
        <p>
          SPFilm paint protection film Copyright © Copyright 2021. All Rights
          Reserved.
        </p>
        <p>Number of visitors: 1821811</p>
      </div>
    </div>
  );
};

export default Footer;
