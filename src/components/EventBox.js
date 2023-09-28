import React from "react";

function EventBox({ eventDesc }) {
  return (
    <>
      <div class="my-5 relative group bg-gray-800 rounded-t-md lg:h-60 h-44 md:h-52 lg:w-96 md:w-80 w-64">
        <img
          src={eventDesc.imgUrl}
          alt="Event Image"
          class="h-full rounded-t-lg object-cover w-full transition-opacity duration-300 transform scale-100 group-hover:scale-95 group-hover:opacity-20"
        />
        <div class="absolute cursor-pointer inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
          <div class="bg-green-500 text-white text-center text-lg p-1 px-3 select-none rounded-lg">
            Know More
          </div>
        </div>
        <div class=" w-full p-2 justify-center flex rounded-b-md bg-gray-600">
          <h5 class="lg:text-xl text-md text-gray-200">{eventDesc.eventDescription}</h5>
        </div>
      </div>
    </>
  );
}

export default EventBox;
