import Image from "next/image";
import React from "react";
import HeaderItem from "./HeaderItem";
import {
  CheckBadgeIcon,
  RectangleStackIcon,
  HomeIcon,
  BoltIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="home" Icon={HomeIcon} />
        <HeaderItem title="trending" Icon={BoltIcon} />
        <HeaderItem title="verified" Icon={CheckBadgeIcon} />
        <HeaderItem title="collections" Icon={RectangleStackIcon} />
        <HeaderItem title="search" Icon={MagnifyingGlassIcon} />
        <HeaderItem title="account" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width="200"
        height="100"
        alt="hulu logo"
      />
    </header>
  );
};

export default Header;
