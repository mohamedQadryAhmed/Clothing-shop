import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import { IoPersonOutline, IoSearchOutline } from "react-icons/io5";
import { PiHandbagLight } from "react-icons/pi";
import { TbMenuDeep } from "react-icons/tb";
import { MdArrowBackIosNew } from "react-icons/md";

import { useState } from "react";

export default function Navbar() {
  const [openMenu, setopenMenu] = useState(false);

  return (
    <header className="flex items-center justify-between py-5 font-medium">
      <img src={assets.logo} alt="logo" className="w-36" />

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.8px] bg-gray-700 hidden  " />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.8px] bg-gray-700 hidden " />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.8px] bg-gray-700 hidden " />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.8px] bg-gray-700 hidden " />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <IoSearchOutline className="w-5 h-5 cursor-pointer" />

        <div className="group relative">
          <IoPersonOutline className="w-5 h-5 cursor-pointer" />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded ">
              <p className="cursor-pointer hover:text-black ">My Profile</p>
              <p className="cursor-pointer hover:text-black ">Orders</p>
              <p className="cursor-pointer hover:text-black ">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <PiHandbagLight className="w-5 h-5 cursor-pointer" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 flex items-center justify-center leading-4 bg-black text-white aspect-square rounded-full text-[9px]">
            10
          </p>
        </Link>
        <TbMenuDeep
          className="w-5 h-5 cursor-pointer sm:hidden"
          onClick={() => setopenMenu(true)}
        />
      </div>
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all duration-500 ${
          openMenu ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setopenMenu(false)}
            className="flex items-center gap-1 mt-4 ms-2 cursor-pointer"
          >
            <MdArrowBackIosNew className="h-5" />
            <p className="mt-1">Back</p>
          </div>
          <NavLink
            onClick={() => setopenMenu(false)}
            className="py-2 pl-6 border-b-2"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setopenMenu(false)}
            className="py-2 pl-6 border-b-2"
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setopenMenu(false)}
            className="py-2 pl-6 border-b-2"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setopenMenu(false)}
            className="py-2 pl-6 border-b-2"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </header>
  );
}
