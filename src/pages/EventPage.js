import React, { useEffect } from "react";
import Header from "../components/Header";


function EventPage({ eventDesc }) {
  useEffect(() => {
    document.title = `${eventDesc.eventName} | Ekna2k23`;
  });

  return (
    <>
      <Header />
      <div className="h-full pt-24 pb-20 flex flex-col items-center gap-5 lg:gap-7 bg-gradient-to-t from-gray-300 to-gray-200 font-sans">
        <div className="text-center lg:text-5xl text-3xl font-semibold pb-3 font-labrada">
          {eventDesc.eventDescription}
        </div>
        <img
          className="rounded-xl w-4/5 lg:max-w-sm md:max-w-xs object-cover "
          src={eventDesc.imgUrl} alt={eventDesc.eventname}
        />
        <div className=" w-5/6 lg:px-24 flex flex-wrap items-baseline justify-around gap-y-3 py-2">
          <div className="w-32 lg:w-24 md:flex-grow">
            <img
              src="/assets/icons/location.png"
              className="lg:h-40 select-none h-28 lg:p-3 m-auto object-contain"
            />
            <figcaption className= "text-center lg:text-xl text-md font-semibold">
              {eventDesc.location}
            </figcaption>
          </div>
          <div className="w-32 lg:w-24 md:flex-grow">
            <img src="/assets/icons/date.png" className=" lg:h-40 select-none h-28 m-auto" />
            <figcaption className= "text-center lg:text-xl text-md font-semibold">
              {eventDesc.date}
            </figcaption>
          </div>
          <div className="w-32 lg:w-24 md:flex-grow">
            <img src="/assets/icons/time.png" className=" lg:h-40 select-none h-28 m-auto" />
            <figcaption className= "text-center lg:text-xl text-md font-semibold">
              {eventDesc.time}
            </figcaption>
          </div>
          <div className="w-32 lg:w-24 md:flex-grow">
            <img
              src="/assets/icons/trophy.png"
              className="lg:h-40 select-none h-28 lg:p-1 m-auto object-contain object-bottom pb-2"
            />
            <figcaption className= "text-center lg:text-xl text-md font-semibold">
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
            className="mt-5 w-full md:max-w-xl max-w-xs md:h-80 h-48 select-none"
            src={`${eventDesc.youtubeLink}`}
            frameborder="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        ) : null}

        <div className="py-5 tap-highlight-transparent">
          <a href={eventDesc.registrationLink} target="blank">
          <button class="bg-sky-700 hover:bg-sky-800 text-white font-semibold text-lg lg:text-xl py-1 lg:py-2 lg:px-5 px-3 mx-10 rounded inline-flex items-center justify-center">
            <img src="/assets/icons/register1.png" className="w-9" />
            <span>Register</span>
          </button></a>
        </div>

          {eventDesc.template ? (<p className="font-semibold text-center text-md md:text-xl flex flex-wrap gap-x-2"> ** To download IEEE Template,<span className="underline underline-offset-4 text-blue-800"><a href={eventDesc.template}>Click here!</a></span></p>) : null }
          <p className="font-semibold text-center text-md md:text-xl px-4 w-full md:w-4/5"> *Use the below QR for payment. Payment proof Screenshot should be attached while registering for an event</p>
          <img src="/assets/qr-code.png" className="lg:p-2 p-1 bg-white lg:w-44 w-40"/>

        <div className="lg:w-4/5 w-11/12">
          <span className="text-xl lg:text-3xl font-semibold">
            Description
          </span>
          <div className="p-4 lg:pl-14 lg:text-justify pr-0 text-md md:text-xl ">
            {eventDesc.description}
          </div>         
        </div>

        {eventDesc.subEvents ? (<div className="lg:w-4/5 w-11/12">
          <span className="text-xl lg:text-3xl font-semibold">
            Events
          </span>
          <ol className="p-4 lg:pl-20 pl-8 lg:text-justify pr-0 text-md md:text-xl ">
            {eventDesc.subEvents.map((rule) => (
              <li className="list-decimal py-0.5">{rule}</li>
            ))}
          </ol>         
        </div>) : null }

         {eventDesc.themes ? (<div className="lg:w-4/5 w-11/12">
          <span className="text-xl lg:text-3xl font-semibold">
            Themes
          </span>
          <ol className="p-4 lg:pl-20 pl-8 lg:text-justify pr-0 text-md md:text-xl">
            {eventDesc.themes.map((theme) => (
              <li className="list-decimal py-0.5">{theme}</li>
            ))}
          </ol>         
        </div>) : null }

        <div className="lg:w-4/5 w-11/12">
          <span className="text-xl lg:text-3xl font-semibold">
            Rules and Regulations
          </span>
          <ol className="p-4 lg:pl-20 pl-8 lg:text-justify pr-0 text-md md:text-xl ">
            {eventDesc.rules.map((rule) => (
              <li className="list-decimal py-0.5">{rule}</li>
              ))}
          </ol>
          {eventDesc.note ? (<div className="px-2 lg:pl-20 text-center font-semibold text-md md:text-xl flex flex-wrap gap-x-5 gap-y-1">{eventDesc.note.map((note) => (<div>{note}</div>))}</div>) : null}
        </div>
              {eventDesc.mailId ? (<p className="font-semibold text-center text-md md:text-xl flex flex-wrap gap-x-2"> Mail Id :<span className="underline underline-offset-4 text-blue-800 tap-highlight-transparent"><a href={`mailto:${eventDesc.mailId}`}>{eventDesc.mailId}</a></span></p>) : null }

        <div className="lg:w-4/5 w-11/12">
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
