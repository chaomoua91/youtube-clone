import React from "react";
import { Menu } from "lucide-react";
import logo from "../assets/fakeyoutubelogo.png";
import Button from "../components/Button";

function PageHeader() {
  return (
    <div className="flex gap-10 lg:gap-20 justify-between">
      <div className="flex gap-4 items-center flex-shrink-0">
        <Button>
          <Menu />
        </Button>
        <a href="/">
          <img src={logo} alt="fake youtube logo" />
        </a>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default PageHeader;
