import React from "react";
import Header from "../components/Header";
import EventList from "../components/EventList";

function Events({ eventsList}) {
  return (
    <div className="">
      <Header/>
    <EventList eventsList={eventsList}/>
    </div>
  );
}

export default Events;
