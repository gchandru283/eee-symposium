import React, {useState, useEffect} from 'react'
import EventBox from './EventBox'

function EventList({eventsList}) {
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
        <div className='pt-24 text-center m-auto w-full lg:text-5xl md:text-4xl text-3xl font-bold font-mono'>
            <span>Events</span>
        <div className='pt-7 '>
        <span onClick={()=> chooseEventList(0)} className={`${!choice ? 'underline text-neutral-900' : 'text-neutral-500'} md:text-3xl text-2xl mx-2 lg:text-5xl cursor-pointer`}>
              
              Technical
            </span>
            <span onClick={()=> chooseEventList(1)} className={`${!choice ? 'text-neutral-500' : 'underline text-neutral-900'} md:text-3xl text-2xl mx-2 lg:text-5xl cursor-pointer`}>
            
              Non-Technical
            </span>
        </div>
        </div>
        <div className=' h-full flex gap-10 flex-wrap lg:m-16 m-5 justify-evenly pb-10'>
            {choiceList(choice).map(eventDesc=> (
                <a href={eventDesc.eventUrl}>
                  <EventBox key={eventDesc.id} eventDesc={eventDesc}/>
                </a>
            ))}
        </div>


    </div>
  )
}

export default EventList