import React, { useState } from "react";

const SpotRegistration = () => {
    const [mouseHover,setMouseHover] = useState(true);
const toggleHover = ()=>{
    setMouseHover(!mouseHover);
}
  return (
    <div className=" lg:text-2xl md:text-xl text-white font-semibold fixed bg-black pt-16 pb-3 bg-opacity-80 w-full text-center z-0">
    <div className={ `cursor-pointer ${mouseHover ? "blinking-text" : ""} `}
    onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
      Registrations Closed, No Onspot Registration on 07.11.2023!
    </div></div>
  );
};

export default SpotRegistration;
