import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import SpotRegistration from '../components/SpotRegistration'

function Home() {
  document.title = 'Home | Ekna2k23'

  return (
    <> 
    <Header/>
    {/* <SpotRegistration /> */}
    <Main/>
    <Footer/>
          
    </>
  )
}

export default Home