import React from "react";

function Main() {
  return (
    <div className="">
      <section className="flex h-screen w-100 bg-gradient-to-b from-black to-slate-950 justify-center items-center ">
        <img src="assets/icons/ekna-logo.png" alt="" className="h-4/5 object-contain"/>
      </section>
      <section className="h-fit w-100 py-10 bg-gradient-to-b from-slate-950 to-slate-800">
        <div className="  w-10/12 m-auto items-center justify-center">
        <h2 className="text-4xl lg:text-6xl my-5 text-center font-oswald font-medium text-green-400">
          About Ekna'23
        </h2>
        <p className="lg:text-justify text-white lg:text-2xl text-lg lg:pt-10 pt-5">
          Ekna'23 is a National Level Techno-Cultural Fest that will be held on November 7,2023. It is a whimsical creation of the staff and students at AURCC's Electrical and Electronics Engineering department. On this auspicious occasion, 10 technical and 10 cultural events are scheduled to be conducted.Some of the activities of the Techno-Cultural Fest include Electro-Hunt, IQuid, Analogy-O-Mania !, Paper presentation, Fashion show, Jokes on the Rocks , Music, Dance, Short film, Photography and a lot more. It is a unique window of opportunity for students from various disciplines to demonstrate their abilities and expertise. This event will undoubtedly give an opportunity for aspiring engineers to develop their abilities and improve their performance. We take immense pleasure to welcome you all to Ekna'23 which will indubitably be "The Rise" for each and every individual who turns up for this Energy packed and Exciting event. We guarantee you the best day that you can have inside our campus and we hope, you can carry those memories along with you. Gear yourself up for an ethereal experience on November 7,2023.
        </p>
        </div>

        <div className=" flex justify-center items-center py-5 lg:py-10">
        <iframe className='mt-5 w-4/5 lg:h-72 h-48 lg:w-2/5' src="https://www.youtube.com/embed/X6VaBPzjh6A" title="EKNA'22 || It's a grand opening of an amazing event Ekna'22 by AURCC  || Department of EEE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div> 
        <div className='flex flex-wrap w-full pb-5 justify-center items-center'>
          <div className='w-full lg:w-1/2'>
            <img src="/assets/icons/ticket.png" alt="" className='w-56 mx-auto lg:w-96'/>
          </div>
          <div className='w-4/5 mx-auto lg:w-1/2 pb-5'>
           
            <ul className='mx-auto text-white lg:text-xl text-md font-semibold'>
              <li className='mx-auto my-1'>It's an one day Inter-college Techno-Cultural fest.</li>
              <li className='mx-auto my-1'>Overall championship will be awarded.</li>
              <li className='mx-auto my-1'>It's an Inter-department and inter-college fest so that any college student can participate.</li>
              <li className='mx-auto my-1'>Exciting cash prizes and rewards are waiting for the winners.</li>
              <li className='mx-auto my-1'>Participation certificates will be provided for all the participants.</li>
              <li className='mx-auto my-1'>Lunch will be provided for all participants.</li>
              <li className='mx-auto my-1'>Accommodation and transportation will be provided.</li>
            </ul>
            <p className='text-cyan-500 text-lg my-4 font-bold'>To register for any 3 events with just ₹150 of ticket,</p>
            </div>
            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold text-xl py-2 px-4 mx-10 rounded inline-flex items-center justify-center">
           <img src="assets/icons/register.png" className="w-9"/>
            <span>Register</span>
            </button>
             </div>
        
        
      </section>
    </div>
  );
}

export default Main;
