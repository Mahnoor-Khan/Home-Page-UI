import React, { useState } from "react";
import Logo from "../Assets/logo.svg";
// import SearchIcon from "../Assets/search-icon.svg";
import { FiMenu } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex justify-between py-3 pr-[16px] pl-[16px] md:pr-[24px] md:pl-[24px] lg:pr-[110px] lg:pl-[107px] items-center">
        <div className="flex justify-between  gap-[10px]">
          <img src={Logo} alt="_logo" className="h-[100px]"/>
        </div>
          <div className="hidden lg:flex gap-[52px] justify-between">
            <div className="flex gap-4 items-center">
              <a className="text-white font-gilroy text-base font-medium">
              Home
              </a>
              <a className="text-white font-gilroy text-base font-medium">
              Dashboard
              </a>
              <a className="text-white font-gilroy text-base font-medium">
              Our App
              </a>
              <a className="text-white font-gilroy text-base font-medium">
              Contacts
              </a>
            </div>
          </div>
        <div className="flex gap-[10px]">
        <button className="hidden lg:inline rounded-[15px] border border-solid border-[#848484] bg-[rgba(47, 47, 47, 0.50)] py-[10px] px-[32px] bg-[#171717] backdrop-blur-[50px] text-white text-center font-gilroy text-base font-medium leading-[27px]">
                Log in
              </button>
        <button className="hidden lg:inline bg-gradient-to-r from-[#FAB00C] to-[#FA0064] py-[10px] px-[32px] rounded-[12px] text-white">
                Sign Up
              </button>
          
        </div>
        <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          <FiMenu
          className="text-white h-[30px] w-[30px]"
            id="dropdownHoverButton"
            data-dropdown-toggle="dropdownHover"
            data-dropdown-trigger="click"
          />
        </div>
        {isOpen && (
          <div
            id="dropdown"
            className="absolute top-[80px] right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <a
                  href="#"
                  className="flex px-5 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex px-5 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex px-5 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Our App
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex px-5 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Contacts
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex px-5 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Search
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
