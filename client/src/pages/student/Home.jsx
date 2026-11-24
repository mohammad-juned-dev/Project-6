import React from 'react'
import Hero from "../../components/student/Hero.jsx"
import Companies from '../../components/student/Companies.jsx'
import CourseSection from '../../components/student/CourseSection.jsx'
import TestimonialSection from '../../components/student/TestimonialSection.jsx'
import CalltoAction from '../../components/student/CalltoAction.jsx'
import Footer from '../../components/student/Footer.jsx'
const Home = () => {
  return (
    <div className='flex flex-1 flex-col min-h-0 overflow-y-auto items-center bg-gradient-to-b from-cyan-200/60  text-center'>
      <Hero/>
      <Companies/>
      <CourseSection/>
      <TestimonialSection/>
      <CalltoAction/>
      <Footer/>
    </div>
  )
}

export default Home