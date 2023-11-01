import React, { useState } from "react";

const SpotRegistration = () => {
    const [mouseHover,setMouseHover] = useState(true);
const toggleHover = ()=>{
    setMouseHover(!mouseHover);
}
  return (
    <div className=" lg:text-2xl md:text-xl text-white fixed bg-black pt-16 pb-3 bg-opacity-80 w-full text-center z-0">
    <div className={`${mouseHover ? "blinking-text" : ""} `}
    onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
      For Onspot Registration - <a className="text-blue-300 cursor-pointer" href="https://docs.google.com/forms/d/e/1FAIpQLSfCpLKgd4mlIyLpYlPhMHS8esehUSRWYsAtGEK4jJ2iCAy8Ow/viewform?usp=pp_url" target="blank">Click Here!</a>
    </div></div>
  );
};

export default SpotRegistration;
