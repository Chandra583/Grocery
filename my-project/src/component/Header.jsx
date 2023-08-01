import React from "react";
import { Link } from "react-router-dom";
import logo from "../assest/logo.png";
// import {BiSolidUser} from "react-icons/fa"
import { FaUserAlt } from 'react-icons/fa'
import { BsCartFill } from 'react-icons/bs';

const Header = () => {
  return (
    <header>
      {/* Destop version */}
      <div className="flex items-center h-full justify-between">
        <Link to={""}>
          <div className="h-10">
            <img src={logo} className="h-full" />
          </div>
        </Link>


        <div className="flex items-center gap-4 md:gap-7">
        <nav className="gap-4 md:gap-6 text-base md:text-lg hidden md:flex">
            <Link to={""}>Home</Link>
            <Link to={"menu/63f0fdbb3bcc2f97fa53d25d"}>Menu</Link>
            <Link to={"about"}>About</Link>
            <Link to={"contact"}>Contact</Link>
          </nav>
          <div className="text-2xl text-slate-600 relative">
            {/* <Link to={"cart"}> */}
              <BsCartFill />
              {/* <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center ">
                {cartItemNumber.length}
              </div> */}
            {/* </Link> */}
          </div>
          <div className="text-2xl text-slate-600 relative">
            <FaUserAlt/>
          </div>
        </div>
      </div>

      {/* mobile version */}
    </header>
  );
};

export default Header;
