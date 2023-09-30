import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

function Home() {
  document.title = 'Home | Ekna2k23'
  return (
    <div> <Header/>
    <Main/>
    <div> <Footer/></div>
          
    </div>
  )
}

export default Home