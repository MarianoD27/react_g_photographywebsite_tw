import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="top-0 w-full p-3  bg-gradient-to-br to-cyan-500 from-blue-500">
      <div className="max-w-[1200px] flex justify-between items-center mx-auto">
        <Link to="/">
          <img src="src/assets/react.svg" alt="logo" className="w-[60px]" />
        </Link>
        {/* Links */}
        <div className="text-2xl flex gap-8 text-blue-900 font-semibold">
          <Link to='/'>
            <a href="#" className=" hover:text-yellow-400">
              Home
            </a>
          </Link>
          <Link to='/gallery'>
            <a href="#" className=" hover:text-yellow-400">
              Gallery
            </a>
          </Link>
          <a href="#" className=" hover:text-yellow-400">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
