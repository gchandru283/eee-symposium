import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div className={`fixed z-10 bg-cyan-700 w-screen md:px-16 px-3 ${isNavOpen ? 'h-48' : 'h-16'} overflow-hidden items-center`}>
      <div className=" flex w-full h-16 justify-between items-center">
      <div className="flex gap-5 items-center">
        <img src="/assets/ekna_side.png" className="object-contain md:h-14 h-10" />
        <div className="hidden lg:inline bg-orange-100 text-gray-800 hover:bg-yellow-100 text-sm items-center px-2 py-0.5 rounded-md ">
        <a href="/student-ambassador">Student Ambassador</a>
      </div>
        </div>
        <img className={`h-7 cursor-pointer lg:hidden`}
            onClick={toggleNav}
            src="/assets/icons/open.png" />       
        <div className=" lg:hidden bg-orange-100 text-gray-800 hover:bg-yellow-100 text-sm items-center px-2 py-0.5 rounded-md ">
        <a href="/student-ambassador">Student Ambassador</a>
      </div>
        <div className="hidden lg:flex w-3/6 max-w-md md:text-xl lg:text-2xl justify-between font-mono text-white">
        <Link to="/" className="hover:text-slate-300 ">
          Home
        </Link>
        <Link to="/events">Events</Link>
        <Link to="/sponsors">Sponsors</Link>
        <Link to="/#contact">Help</Link>
      </div>
      
      </div>
      <div className="flex flex-col text-lg justify-around items-center ">
        <Link to="/" className=" w-3/5 text-gray-100">
          Home
        </Link>
        <Link className=" w-3/5 text-gray-100"  to="/events">Events</Link>
        <Link className=" w-3/5 text-gray-100"  to="/sponsors">Sponsors</Link>
        <Link className=" w-3/5 text-gray-100"  to="/#contact">Help</Link>
      </div>
    </div>
  );
};

export default Header;
