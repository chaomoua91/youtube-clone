import React, { useState } from "react";
import { Bell, Menu, Upload, User, Mic, Search, ArrowLeft } from "lucide-react";
import logo from "../assets/fakeyoutubelogo.png";
import Button from "../components/Button";

function PageHeader() {
  const [showFullWidthSearch, setShowFullWidth] = useState(false);
  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <div
        className={`gap-4 items-center flex-shrink-0 ${
          showFullWidthSearch ? "hidden" : "flex"
        }`}
      >
        <Button>
          <Menu />
        </Button>
        <a href="/">
          <img src={logo} alt="fake youtube logo" />
        </a>
      </div>
      <form
        className={`md:flex gap-4 flex-grow justify-center ${
          showFullWidthSearch ? "flex" : "hidden"
        }`}
      >
        {showFullWidthSearch && (
          <Button
            onClick={() => setShowFullWidth(false)}
            type="button"
            size="icon"
            variant="ghost"
            className="flex-shrink-0"
          >
            <ArrowLeft />
          </Button>
        )}
        <div className="flex flex-grow max-w-[600px]">
          <input
            type="search"
            placeholder="Search"
            className="rounded-l-full border border-secondary-border 
            shadow-inner shadow-secondary py-1 px-4 text-lg w-full
            focus:board-blue-500 outline-none"
          />
          <Button className="py-2 px-4 rounded-r-full border-secondary-border border border-l-0 flex-shrink-0">
            <Search />
          </Button>
        </div>
        <Button type="button" size="icon" className="flex-shrink-0">
          <Mic />
        </Button>
      </form>
      <div
        className={`flex-shrink-0 md-gap-2 ${
          showFullWidthSearch ? "hidden" : "flex"
        }`}
      >
        <Button
          onClick={() => setShowFullWidth(true)}
          size="icon"
          variant="ghost"
          className="md:hidden"
        >
          <Search />
        </Button>
        <Button size="icon" variant="ghost" className="md:hidden">
          <Mic />
        </Button>
        <Button size="icon" variant="ghost">
          <Upload />
        </Button>
        <Button size="icon" variant="ghost">
          <Bell />
        </Button>
        <Button size="icon" variant="ghost">
          <User />
        </Button>
      </div>
    </div>
  );
}

export default PageHeader;
