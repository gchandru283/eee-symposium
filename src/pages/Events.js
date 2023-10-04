import React from "react";
import Header from "../components/Header";
import EventList from "../components/EventList";

function Events({ eventsList}) {
  document.title = 'Events List | Ekna2k23';
  return (
    <div>
     <Header/>
    <EventList eventsList={eventsList}/>
    </div>
  );
}

export default Events;
