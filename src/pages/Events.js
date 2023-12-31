import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import EventBox from "../components/EventBox";


function Events({ eventsList}) {
  document.title = 'Events List | Ekna2k23';
 
  const [choice, setChoice] = useState(0);

    const chooseEventList =  (num) =>{
        setChoice(num);
    }
    const choiceList = (choice) =>{
        return eventsList.filter(indEvent => indEvent.type === choice)
      }
      
  return (
    <div>
     <Header/>
    <div className='bg-gradient-to-b from-stone-200 to-stone-400'>
        <div className='pt-20 text-center w-full '>
            <span className='lg:text-6xl md:text-5xl text-4xl font-semibold font-labrada'> Events</span>
        <div className='lg:pt-7 pt-4 font-medium font-oswald flex lg:gap-16 gap-10 justify-center md:text-3xl text-2xl lg:text-5xl cursor-pointer select-none tap-highlight-transparent'>
        <span onClick={()=> chooseEventList(0)} className={`duration-300 ${!choice ? 'border-b-2 lg:pb-2 pb-1 border-slate-800 text-slate-800 duration-1000 scale-105' : 'text-lime-900'}`}>
              
              Technical
            </span>
            <span onClick={()=> chooseEventList(1)} className={`duration-300 ${!choice ? 'text-lime-900' : 'border-b-2 lg:pb-2 pb-1 border-slate-800 text-slate-800 duration-1000 scale-105'}`}>
            
              Non-Technical
            </span>
        </div>
        </div>
        <div className='flex gap-10 flex-wrap lg:px-32 lg:pt-20 lg:pb-28 justify-evenly pb-16 mx-12 bg-inherit tap-highlight-transparent'>
            {choiceList(choice).map(eventDesc=> (
                <a href={eventDesc.eventUrl}>
                  <EventBox key={eventDesc.id} eventDesc={eventDesc}/>
                </a>
            ))}
        </div>


    </div>
    </div>
  )
}

export default Events;
