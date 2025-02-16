import { createTheme, ThemeProvider } from "@mui/material";
import { yellow } from "@mui/material/colors";
import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { Outlet } from "react-router";
import { IoClose } from "react-icons/io5";
import NavLink from "./NavLink";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme()`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

function Appshell() {
  const [navOpen, setNavOpen] = React.useState(false);
  return (
    <div className="bg-white min-h-screen font-body px-12 py-6">
      <div className="flex-col relative items-center ">
        {/* <p className="flex justify-center">logo</p> */}
        <div className="text-4xl font-display justify-center flex">
          Morning View Meadows
        </div>
        <div
          onClick={() => setNavOpen(!navOpen)}
          className="absolute top-2 right-0 text-gray-700/80"
        >
          {navOpen ? (
            <IoClose className="size-8" />
          ) : (
            <RxHamburgerMenu className="size-8" />
          )}
        </div>
        <nav className="flex justify-center">
          <ul className=" gap-2 hidden md:flex">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/calendar">Calendar</a>
            </li>
            <li>
              <a href="/gallery">Gallery</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="py-6 relative">
        <Outlet />
      </div>

      {navOpen && (
        <>
          <div className="absolute z-10 top-0 right-0 md:w-2/3 w-full h-screen bg-white">
            <div className="relative flex items-center justify-center">
              <ul className="flex flex-col justify-center items-center h-full gap-6">
                <li>
                  <NavLink href="/">Home</NavLink>
                </li>
                <li>
                  <NavLink href="/about">About</NavLink>
                </li>
                <li>
                  <NavLink href="/calendar">Calendar</NavLink>
                </li>
                <li>
                  <NavLink href="/galery">Galery</NavLink>
                </li>
              </ul>
              <div className="absolute top-10 right-10">
                {navOpen ? (
                  <IoClose className="size-8" />
                ) : (
                  <RxHamburgerMenu className="size-8" />
                )}
              </div>
            </div>
          </div>
          <div className="hidden md:flex z-0 md:absolute top-0 bottom-0 right-0 left-0 bg-black/70"></div>
        </>
      )}
      <div className="flex flex-col border-t-2 border-gray-400/10 space-y-6 py-6">
        <div className="self-start text-4xl font-display justify-center flex">
          Morning View Meadows
        </div>
        <ul className="flex justify-between gap-2 flex-wrap mx-12">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/calendar">Calendar</a>
          </li>
          <li>
            <a href="/gallery">Gallery</a>
          </li>
        </ul>
        <ul className="flex justify-center gap-2 mx-12">
          <li>
            <a
              href="https://www.facebook.com/people/Morning-View-Meadows/100091527961377/?utm_source=theknot.com&utm_medium=referral&utm_campaign=theknot"
              className="flex gap-2 items-center text-sm text-gray-600 hover:text-gray-800 hover:underline"
            >
              follow us on facebook <FaFacebookF />
            </a>
          </li>
          {/* <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/calendar">Calendar</a>
          </li>
          <li>
            <a href="/gallery">Gallery</a>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default Appshell;
