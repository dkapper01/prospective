import { Link } from "gatsby";
import React from "react";
import CTALink from "./CTALink";

const Header = ({ showNav, siteTitle, scrolled, navMenuItems = [], textWhite = true }) => {
  let headerClass = "fixed w-full z-30 top-0 text-white";
  headerClass += scrolled ? " bg-white shadow" : "";

  let navActionClass =
    "mx-auto lg:mx-0 hover:underline font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75";
  navActionClass += !textWhite || !scrolled ? " bg-white text-gray-800" : "";
  navActionClass += textWhite || scrolled ? " gradient text-white" : "";

  let navContentClass =
    "w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 text-black p-4 lg:p-0 z-20";
  navContentClass += !textWhite || !scrolled ? " lg:bg-transparent bg-gray-100" : "";
  navContentClass += textWhite || scrolled ? " bg-white" : "";

  let titleClass = "toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-4xl";
  titleClass += !textWhite || scrolled ? " text-gray-800" : "";
  titleClass += textWhite || !scrolled ? " text-white" : "";

  return (
    // <nav id="header" className={headerClass}>
    //   <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
    //     <div className="pl-4 flex items-center">
    //       <Link id="siteTitle" className={titleClass} to="/">
    //         <svg
    //           className="h-8 fill-current inline"
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 512.005 512.005"
    //         >
    //           <rect
    //             fill="#2a2a31"
    //             x="16.539"
    //             y="425.626"
    //             width="479.767"
    //             height="50.502"
    //             transform="matrix(1,0,0,1,0,0)"
    //           />
    //           <path
    //             className="plane-take-off"
    //             d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
    //           />
    //         </svg>{" "}
    //         {siteTitle}
    //       </Link>
    //     </div>

    //     {showNav && navMenuItems && (
    //       <div className={navContentClass} id="nav-content">
    //         <ul className="list-reset lg:flex justify-end flex-1 items-center">
    //           {navMenuItems.map((i) => (
    //             <li className="mr-3">
    //               <CTALink {...i} buttonActionClass={navActionClass} />
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //     )}
    //   </div>

    //   <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    // </nav>
<div class="relative bg-white overflow-hidden">
  <div class="relative pt-6 pb-16 sm:pb-24 lg:pb-6">
    <nav class="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6" aria-label="Global">
      <div class="flex items-center flex-1">
        <div class="flex items-center justify-between w-full md:w-auto">
          <a href="#">
            <span class="sr-only">Workflow</span>
            <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
          </a>
          <div class="-mr-2 flex items-center md:hidden">
            <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" id="main-menu" aria-haspopup="true">
              <span class="sr-only">Open main menu</span>
              {/* <!-- Heroicon name: menu --> */}
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        <div class="hidden md:block md:ml-10 md:space-x-10">
          <a href="#" class="font-medium text-gray-500 hover:text-gray-900">Product</a>

          <a href="#" class="font-medium text-gray-500 hover:text-gray-900">Features</a>

          <a href="#" class="font-medium text-gray-500 hover:text-gray-900">Marketplace</a>

          <a href="#" class="font-medium text-gray-500 hover:text-gray-900">Company</a>
        </div>
      </div>
      <div class="hidden md:block text-right">
        <span class="inline-flex rounded-md shadow-md ring-1 ring-black ring-opacity-5">
          <a href="#" class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50">
            Log in
          </a>
        </span>
      </div>
    </nav>

    {/* <!--
      Mobile menu, show/hide based on menu open state.

      Entering: "duration-150 ease-out"
        From: "opacity-0 scale-95"
        To: "opacity-100 scale-100"
      Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
    --> */}
    <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
      <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
        <div class="px-5 pt-4 flex items-center justify-between">
          <div>
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
          </div>
          <div class="-mr-2">
            <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span class="sr-only">Close main menu</span>
              {/* <!-- Heroicon name: x --> */}
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
          <div class="px-2 pt-2 pb-3 space-y-1" role="none">
            <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem">Product</a>

            <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem">Features</a>

            <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem">Marketplace</a>

            <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem">Company</a>
          </div>
          <div role="none">
            <a href="#" class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100" role="menuitem">
              Log in
            </a>
          </div>
        </div>
      </div>
            </div>
          </div>
          </div>
  );
};

export default Header;
