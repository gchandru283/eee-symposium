import React, { useEffect } from "react";
import Header from "../components/Header";


function EventPage({ eventDesc }) {
  useEffect(() => {
    document.title = `${eventDesc.eventName} | Ekna2k23`;
  });

  return (
    <>
      <Header />
      <div className="pt-24 pb-20 flex flex-col items-center gap-7 bg-gradient-to-t from-gray-400 to-cyan-300">
        <div className="text-center lg:text-5xl text-3xl font-semibold pb-3 font-labrada">
          {eventDesc.eventDescription}
        </div>
        <img
          className="rounded-xl w-4/5 lg:max-w-sm md:max-w-xs object-cover "
          src={eventDesc.imgUrl}
        />
        <div className=" w-5/6 lg:px-24 flex flex-wrap items-baseline justify-around gap-y-3 py-2">
          <div className="w-32 lg:w-24 md:flex-grow">
            <img
              src="/assets/icons/location.png"
              className="lg:h-40 select-none h-28 lg:p-3 m-auto object-contain"
            />
            <figcaption className= "text-center lg:text-xl text-lg font-semibold">
              {eventDesc.location}
            </figcaption>
          </div>
          <div className="w-32 lg:w-24 md:flex-grow">
            <img src="/assets/icons/date.png" className=" lg:h-40 select-none h-28 m-auto" />
            <figcaption className= "text-center lg:text-xl text-lg font-semibold">
              {eventDesc.date}
            </figcaption>
          </div>
          <div className="w-32 lg:w-24 md:flex-grow">
            <img src="/assets/icons/time.png" className=" lg:h-40 select-none h-28 m-auto" />
            <figcaption className= "text-center lg:text-xl text-lg font-semibold">
              {eventDesc.time}
            </figcaption>
          </div>
          <div className="w-32 lg:w-24 md:flex-grow">
            <img
              src="/assets/icons/trophy.png"
              className="lg:h-40 select-none h-28 lg:p-1 m-auto object-contain object-bottom pb-2"
            />
            <figcaption className= "text-center lg:text-xl text-lg font-semibold">
              {eventDesc.prize.map((prize) => (
                <ol>
                  <li key={prize} className="w-28 lg:w-36 mx-auto ">
                    {prize}
                  </li>
                </ol>
              ))}
            </figcaption>
          </div>
        </div>

        {eventDesc.youtubeLink ? (
          <iframe
            className="mt-5 w-4/5 lg:h-72 h-48 lg:w-2/5"
            src={`${eventDesc.youtubeLink}`}
            title={`${eventDesc.youtubeTitle}`}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        ) : null}

        <div className="py-5">
          <button class="bg-sky-700 hover:bg-sky-800 text-white font-semibold text-lg lg:text-xl py-1 lg:py-2 lg:px-5 px-3 mx-10 rounded inline-flex items-center justify-center">
            <img src="/assets/icons/register1.png" className="w-9" />
            <span>Register</span>
          </button>
        </div>

        <div className="lg:w-4/ select-none5 w-11/12">
          <span className="text-xl lg:text-3xl font-semibold">
            Description
          </span>
          <div className="p-4 lg:pl-14 lg:text-justify pr-0 text-md md:text-xl ">
            {eventDesc.description}
          </div>         
        </div>

        {eventDesc.events ? (<div className="lg:w-4/ select-none5 w-11/12">
          <span className="text-xl lg:text-3xl font-semibold">
            Events
          </span>
          <ol className="p-4 lg:pl-20 pl-8 lg:text-justify pr-0 text-md md:text-xl ">
            {eventDesc.rules.events((rule) => (
              <li className="list-decimal py-0.5">{rule}</li>
            ))}
          </ol>         
        </div>) : null }

        <div className="lg:w-4/ select-none5 w-11/12">
          <span className="text-xl lg:text-3xl font-semibold">
            Rules and Regulations
          </span>
          <ol className="p-4 lg:pl-20 pl-8 lg:text-justify pr-0 text-md md:text-xl ">
            {eventDesc.rules.map((rule) => (
              <li className="list-decimal py-0.5">{rule}</li>
            ))}
          </ol>
          {eventDesc.note ? (<div className="p-2 lg:pl-20 pl-10 font-semibold text-md md:text-xl">{eventDesc.note}</div>) : null}
        </div>

        <div className="lg:w-4/ select-none5 w-11/12">
          <span className="text-xl lg:text-3xl font-semibold">
            Event Organizers
          </span>
          <ol className="p-4 lg:pl-20 pl-8 lg:text-justify pr-0 text-md md:text-xl ">
            {eventDesc.eventOrganizers.map((organizer) => (
              <li className="list-decimal py-0.5">{organizer}</li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}

export default EventPage;
