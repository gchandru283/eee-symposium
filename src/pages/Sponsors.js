import React from 'react'
import Header from '../components/Header'

function Sponsors({ sponsors}) {
  document.title = 'Sponsors | Ekna2k23';
  return (
    <div><Header/>
    <div className='flex flex-col justify-center items-center lg:p-2 p-1 font-sans'>
    <div className=" lg:pt-20 pt-16 mt-2 lg:mt-0 font-semibold" >
          <p className="lg:text-6xl text-3xl text-gray-900 text-center font-labrada pb-5">Sponsors</p>
        </div>
        <div class="lg:py-4 mx-5 lg:mx-20 ">
          <p class=" lg:text-xl mb-7 lg:pl-12 pl-3">
          Sponsors are our foremost supporters for  happening various events in this symposium. To visit our sponsorship brochure, Click the button below 👇...
          </p>
        </div>
        <a href='https://drive.google.com/file/d/1DIBZhR3g_1dDbkutzcfplx5hM2uij2UV/view?usp=drive_link' target='blank'><button class="bg-blue-600 hover:bg-blue-700 font-medium lg:text-xl text-lg lg:px-7 px-5 mx-10 rounded-lg lg:p-2 p-1 text-gray-200 font-sans">
            <span>Sponsors Brochure</span>
          </button></a>
        
        <span>Our Sponsors</span>
        <div className='flex flex-wrap py-10 w-2/3 lg:w-4/5 mx-auto justify-center'>
                    {
                        sponsors.map(sponsor => (
                            <img className="m-4 lg:w-80"  src={`${sponsor.sponsorLogo}`} alt={`${sponsor.sponsorName}`} key={sponsor.sponsor}/>
                        ))
                       
                    }
                </div>
        </div>

      
      
      
      
      
      </div>
  )
}

export default Sponsors