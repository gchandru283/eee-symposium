import React, {useEffect} from 'react'
import Header from '../components/Header';


function NonTechEvent({ eventDesc }) {

    useEffect(()=>{
      document.title = `${eventDesc.eventName} | Ekna2k23`
    });

    return(
<>
  <Header/>
</>
    )
}

export default NonTechEvent