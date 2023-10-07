import React from "react";
import Header from "../components/Header";

function Sponsors({ sponsors, mediaPartners }) {
  document.title = "Sponsors | Ekna2k23";
  return (
    <div className="h-screen">
      <Header />
      <div className="flex flex-col justify-center items-center lg:p-2 p-1 font-sans bg-gradient-to-b from-lime-50 to-lime-100 min-h-screen">
        <div className=" lg:pt-20 pt-16 mt-2 lg:mt-0 font-semibold">
          <p className="lg:text-6xl text-3xl text-gray-900 text-center font-labrada pb-5">
            Sponsors
          </p>
        </div>
        <div class="lg:py-4 mx-5 lg:mx-20 ">
          <p class=" lg:text-xl mb-7 lg:pl-12 pl-3">
            Sponsors are our foremost supporters for happening various events in
            this symposium. To visit our sponsorship brochure, Click the button
            below 👇...
          </p>
         </div>
        <a
          href="https://drive.google.com/file/d/1DIBZhR3g_1dDbkutzcfplx5hM2uij2UV/view?usp=drive_link"
          target="blank"
        >
          <button class="bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all font-medium lg:text-xl text-lg lg:px-7 px-5 mx-10 rounded-lg lg:p-2 p-1 text-gray-200 font-sans select-none">
            <span>Sponsors Brochure</span>
          </button>
        </a>
 
        {/* <p className="lg:text-5xl text-2xl font-bold  pt-10 lg:pb-4 border-b-2 border-gray-600">
          Our Sponsors
        </p>
        <div className="flex flex-wrap py-10 w-2/3 lg:w-full lg:gap-8 gap-6 mx-auto justify-center">
          {sponsors.map((sponsor) => (
            <img
              className=" object-fill lg:h-52 h-40 w-72 select-none border-2 border-stone-200 rounded lg:w-80"
              src={`${sponsor.sponsorLogo}`}
              alt={`${sponsor.sponsorName}`}
              key={sponsor.sponsor}
            />
          ))}
        </div> 

        <p className="lg:text-5xl text-2xl font-bold  lg:pt-10 lg:pb-4 border-b-2 border-gray-600">
          Our Media Partners
        </p>
        <div className="flex flex-wrap pt-10 pb-20 w-2/3 lg:w-full lg:gap-8 gap-6 mx-auto justify-center">
          {mediaPartners.map((partner) => (
            <img
              className="object-fill lg:h-52 h-40 w-72 select-none border-2 border-stone-200 rounded lg:w-80"
              src={`${partner.mediaPartnerLogo}`}
              alt={`${partner.mediaPartnerName}`}
            />
          ))}
        </div> */}

      </div>
    </div>
  );
}

export default Sponsors;
