import React from "react";
import { Menu, Moon, Search, Settings2, Sun, SunMedium } from "lucide-react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsDarkMode, setIsSidebarCollapsed } from "@/state";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  return (
    <div className="flex items-center justify-between bg-white px-4 py-3 dark:bg-black">
      {/* Search Bar */}
      <div className="flex items-center gap-8">
        {!isSidebarCollapsed ? null : (
          <button
            onClick={() => dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))}
          >
            <Menu className="size-8 dark:text-white" />
          </button>
        )}
        <div className="relative flex h-min w-[200px]">
          <Search className="absolute left-[4px] top-1/2 mr-2 h-5 w-5 -translate-y-1/2 transform cursor-pointer dark:text-white" />
          <input
            className="w-full rounded border-none bg-gray-100 p-2 pl-8 placeholder-gray-900 focus:border-transparent focus:outline-none dark:bg-gray-700 dark:text-white dark:placeholder-white"
            type="search"
            placeholder="Search Here..."
          />
        </div>
      </div>
      {/* Icons */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => dispatch(setIsDarkMode(!isDarkMode))}
          className={
            isDarkMode
              ? `rounded bg-gray-900 p-2 text-yellow-500 hover:bg-gray-700`
              : `rounded bg-gray-200 p-2 text-gray-700 hover:bg-gray-100`
          }
        >
          {!isDarkMode ? (
            <Moon className="size-6 cursor-pointer" />
          ) : (
            <Sun className="size-6 cursor-pointer" />
          )}
        </button>
        <Link
          href="/settings"
          className={
            isDarkMode
              ? `size-min rounded bg-gray-900 p-2 text-yellow-500 hover:bg-gray-700`
              : `size-min rounded bg-gray-200 p-2 text-gray-700 hover:bg-gray-100`
          }
        >
          <Settings2 className="size-6 cursor-pointer dark:text-white" />
        </Link>
        <div className="mr-5 min-h-[2em] w-[0.1rem] bg-gray-200 md:inline-block"></div>
      </div>
    </div>
  );
};

export default Navbar;
