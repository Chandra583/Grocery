import React from "react";
import logo from "../assest/logo.png";

const Header = () => {
  return (
    <header>
      {/* Destop version */}
      <div className="flex items-center h-full justify-between">
      <div className="h-10">
        <img src={logo} className="h-full" />
        </div>
      </div>

      {/* mobile version */}
    </header>
  );
};

export default Header;
