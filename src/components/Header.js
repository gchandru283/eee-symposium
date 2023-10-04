import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const shrinkTimer = setTimeout(() => {
      setIsNavOpen(false);
    }, 2500);

    return () => clearTimeout(shrinkTimer);
  }, [isNavOpen]);

    return (
    <div
      className={`select-none fixed z-20 bg-black bg-opacity-80 w-screen md:px-16 px-3 ${
        isNavOpen ? "h-52  will-change-scroll duration-150" : "h-16"
      } overflow-hidden items-center`}
    >
      <div className=" flex w-full h-16 justify-between items-center">
        <div className="flex gap-5 items-center">
          <img
            src="/assets/icons/ekna_side.png"
            className="object-contain md:h-14 h-10"
          />
          <div className="hidden lg:inline bg-orange-100 text-gray-800 font-dm-sans font-light hover:bg-yellow-100 text-sm items-center px-2 py-0.5 rounded-md transition-all duration-500 will-change-transform hover:scale-105">
            <a href="/student-ambassador">Student Ambassador</a>
          </div>
        </div>
        <img
          className={`h-4 w-7 transition-transform duration-300 select-none object-fill cursor-pointer lg:hidden ${isNavOpen ? 'rotate-180' : null }`}
          onClick={toggleNav}
          src="/assets/icons/menu.png"
        />
        <div className=" lg:hidden bg-orange-100 text-gray-800 font-dm-sans font-light hover:bg-yellow-100 text-sm items-center px-2 py-0.5 rounded-md ">
          <a href="/student-ambassador">Student Ambassador</a>
        </div>
        <div className="hidden lg:flex w-full max-w-sm md:text-xl lg:text-2xl justify-between text-white">
          <Link
            to="/"
            className="transition-all duration-500 will-change-transform hover:scale-110"
          >
            Home
          </Link>
          <Link
            to="/events"
            className="transition-all duration-500 will-change-transform hover:scale-110"
          >
            Events
          </Link>
          <Link
            to="/sponsors"
            className="transition-all duration-500 will-change-transform hover:scale-110"
          >
            Sponsors
          </Link>
          <Link
             to="/#help" 
            className="transition-all duration-500 will-change-transform hover:scale-110"
          >
            Help
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-1 text-lg items-center transition">
        <Link to="/" className=" w-auto pr-14 text-gray-100 transition-all duration-300 will-change-transform hover:scale-105">
          Home
        </Link>
        <hr className=" border-gray-800 w-full" />
        <Link className=" w-auto pr-14 text-gray-100 transition-all duration-300 will-change-transform hover:scale-105" to="/events">
          Events
        </Link>
        <hr className=" border-gray-800 w-full" />
        <Link className=" w-auto pr-14 text-gray-100 transition-all duration-300 will-change-transform hover:scale-105" to="/sponsors">
          Sponsors
        </Link>
        <hr className=" border-gray-800 w-full" />
        <Link className=" w-auto pr-14 text-gray-100 transition-all duration-300 will-change-transform hover:scale-105" to="/#help">
          Help
        </Link>
      </div>
    </div>
  );
};

export default Header;
