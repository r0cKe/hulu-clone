import Image from "next/image";
import React, { useState } from "react";
import HeaderItem from "./HeaderItem";
import {
  CheckBadgeIcon,
  RectangleStackIcon,
  HomeIcon,
  BoltIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const router = useRouter();

  const debouncer = (fn, delay) => {
    let timer;
    return function (...args) {
      clearInterval(timer);
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    };
  };

  const queryDebounce = debouncer((query) => {
    router.push(`/?movie_name=${query}`);
  }, 500);

  const handleSearch = (e) => {
    const query = e.target.value;
    queryDebounce(query);
  };

  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem
          title="home"
          Icon={HomeIcon}
          onClick={() => router.push("/")}
        />
        <HeaderItem title="trending" Icon={BoltIcon} />
        <HeaderItem title="verified" Icon={CheckBadgeIcon} />
        <HeaderItem title="collections" Icon={RectangleStackIcon} />
        <HeaderItem
          title="search"
          Icon={MagnifyingGlassIcon}
          onClick={() => setShowSearch(true)}
        />
        <HeaderItem title="account" Icon={UserIcon} />
      </div>
      {showSearch ? (
        <div>
          <input
            type="text"
            className="p-2 font-medium placeholder:opacity-50 bg-transparent focus:outline-none focus:border-b"
            placeholder="Search movies"
            autoFocus
            onBlur={() => setShowSearch(false)}
            onChange={(e) => handleSearch(e)}
          />
        </div>
      ) : (
        ""
      )}
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
