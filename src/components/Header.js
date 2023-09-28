import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div className="fixed z-10 bg-cyan-700 w-screen flex justify-between md:px-16 px-5">
      <div className="flex gap-5">
        <div className="h-16 w-16 ">
        <img src="/assets/ekna-logo.png" className="object-contain" />
      </div>
      <div className="mt-5 hidden lg:block bg-orange-100 text-gray-800 hover:bg-orange-200 text-sm monts align-center px-2 py-0.5 rounded-md h-6">
        <a href="/student-ambassador">Student Ambassador</a>
      </div></div>
      <div className="lg:hidden pt-5 flex flex-col items-center">
        <div className="block">
          <img
            className="h-7  cursor-pointer"
            onClick={toggleNav}
            src={
              isNavOpen ? "/assets/icons/close.png" : "/assets/icons/open.png"
            }
          />
        </div>

        {isNavOpen && (
          <div className="lg:hidden py-7 ">
            <div className=" text-slate-200 text-lg font-semibold flex flex-col justify-center gap-2 items-center">
              <Link to="/" className="hover:text-slate-300">Home</Link>
              <Link to="/events" className="hover:text-slate-300 ">
                Events
              </Link>
              <Link to="/sponsors" className="hover:text-slate-300">
                Sponsors
              </Link>
              <Link to="/#contact" className="hover:text-slate-300">
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>

      <div className="mt-5 lg:hidden bg-orange-100 text-gray-800 hover:bg-orange-200 focus:bg-orange-200 text-sm monts align-center px-2 py-0.5 rounded-md h-6">
        <a href="/student-ambassador">Student Ambassador</a>
      </div>
      <div className="hidden lg:flex w-3/6 max-w-md pt-4 md:text-xl lg:text-2xl justify-between font-mono text-white">
        <Link to="/" className="hover:text-slate-300 ">
          Home
        </Link>
        <Link to="/events">Events</Link>
        <Link to="/sponsors">Sponsors</Link>
        <Link to="/#contact">Contact Us</Link>
      </div>
    </div>
  );
};

export default Header;
