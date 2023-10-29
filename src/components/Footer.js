import React, { useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const [mouseHover,setMouseHover] = useState(null);
  const socialMedia = [
    {
      id:1, src:"./assets/icons/facebook.png", src1:"./assets/icons/facebook1.png", link:"https://www.facebook.com/eknasympo"
    },
    {
      id:2, src:"./assets/icons/instagram.png",src1:"./assets/icons/instagram1.png", link:"https://instagram.com/_ekna2k23_"
    },
    {
      id:3, src:"./assets/icons/mail.png",src1:"./assets/icons/mail1.png", link:"mailto:eknasympo@gmail.com"
    },
    {
      id:4, src:"./assets/icons/youtube.png",src1:"./assets/icons/youtube1.png", link:"https://youtube.com/@eknasympo2k23"
    }, 
    {
      id:5, src:"./assets/icons/linkedin.png",src1:"./assets/icons/linkedin1.png", link:"https://www.linkedin.com/in/ekna-sympo"
    },
    {
      id:6, src:"./assets/icons/twitter.png",src1:"./assets/icons/twitter1.png", link:"https://x.com/eknasympo"
    },
  ];
  
  return (
    <div className="w-full h-full bg-gradient-to-t from-slate-400 to-slate-800 lg:p-8 py-3 flex flex-wrap justify-around text-gray-300 gap-7">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-5 ">
          <p className="text-center font-medium text-2xl lg:text-4xl border-b-2 px-2 lg:pb-1 font-oswald text-green-300 border-green-200 m-auto">
            Location
          </p>
          <iframe
            className="mx-auto border-2 border-y-4 border-slate-700 hover:scale-105 duration-500 active:scale-105 tap-highlight-transparent"
            id="gmap-canvas"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.9491172651287!2d76.88388301532656!3d11.04244189214134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85910327ab1e3%3A0x9f7a2b4ef20fe07!2sAnna%20University%20Regional%20Campus%2C%20Coimbatore!5e0!3m2!1sen!2sin!4v1653732177820!5m2!1sen!2sin"
            title="Map"
          ></iframe>
        </div>

        <div className="flex flex-col lg:gap-5 gap-3">
          <div className="text-center font-medium text-2xl lg:text-4xl m-auto border-b-2 px-2 lg:pb-1 font-oswald text-green-300 border-green-200">
            Address
          </div>
          <ul className="pl-5 lg:pl-7 text-lg lg:text-xl lg:scale-110 font-roboto-condensed">
            <li>Anna University Regional Campus - CBE,</li>
            <li>Maruthamalai Main Road,</li>
            <li>Navavoor,</li>
            <li>Coimbatore - 641 046.</li>
          </ul>
        </div>
      </div>
      <div className=" flex justify-center lg:pt-20 md:px-64 px-16 lg:px-2 select-none">
        <img src="./assets/icons/au-logo.png" className="h-40 md:h-48" />
      </div>

      <div className="flex flex-col lg:w-1/4 items-center">
        <div className="text-center font-medium text-2xl lg:text-4xl mb-5 mx-auto border-b-2 px-2 lg:pb-1 font-oswald text-green-300 border-green-200">
          Contact Us
        </div>
        <div className="flex flex-col gap-4 lg:gap-7  font-roboto-condensed">
          <div className="lg:scale-110">
            <p className="text-xl font-medium">Payment</p>
            <ul className="pl-5 text-lg ">
              <li> Jegan - +91 9025450960</li>
              <li> Gowtham - +91 8778293837</li>
              <li> UPI ID - ravijegan2003-1@oksbi</li>
            </ul>
          </div>

          <div className="lg:scale-110">
            <p className="text-xl font-medium">General Queries</p>
            <ul className="pl-5 text-lg">
              <li> Gokul - +91 9597208840</li>
              <li> Jeyasri - +91 82209 23564</li>
              <li> Theeksha - +91 6379 111 267</li>
              <li> Chidambaram - +91 6380411852</li>
            </ul>
          </div>

          <div className="lg:scale-110">
            <p className="text-xl font-medium">Tech events</p>
            <ul className="pl-5 text-lg">
              <li> Srihari - +919360149213.</li>
              <li> Suruthika - +91 75982 80648</li>
            </ul>
          </div>

          <div className="lg:scale-110">
            <p className="text-xl font-medium">Non tech events</p>
            <ul className="pl-5 text-lg ">
              <li> Revanth - +919940827095</li>
              <li> Mythili - +91 86103 06385</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-2xl w-full h-fit select-none">
        <p className="lg:text-3xl text-2xl font-medium font-fira-sans-condensed px-5 pb-5">Follow us on..</p>
        <div className="flex justify-between lg:px-32 md:px-16 px-12 pb-10 lg:pb-0 tap-highlight-transparent">
        {socialMedia.map((icon) => (
        <Link to={icon.link} target="blank" key={icon.id} onMouseEnter={()=>setMouseHover(icon.id)} onMouseLeave={()=>setMouseHover(null)}>
            <img
              src={mouseHover === icon.id ? icon.src : icon.src1}
              className="h-12 object-contain"
            />
          </Link>))}
         
        </div>
      </div>
    </div>
  );
}
export default Footer;
