import React, {useEffect} from 'react'
import Header from '../components/Header';


function TechEvent({ eventDesc }) {

    useEffect(()=>{
      document.title = `${eventDesc.eventName} | Ekna2k22`
    });

    return(
<div>
  <Header/>
</div>
    )
}

export default TechEvent