import React from 'react'
import Hero from "../../components/student/Hero.jsx"
const Home = () => {
  return (
    <div className='flex flex-1 flex-col min-h-0 overflow-y-auto items-center bg-gradient-to-b from-cyan-200/60 space-y-7 text-center'>
      <Hero/>
    </div>
  )
}

export default Home