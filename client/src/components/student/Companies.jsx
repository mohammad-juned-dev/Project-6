import React from 'react'
import { assets } from '../../assets/assets'

const Companies = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-5 mt-10'>
      <p className='text-gray-500 text-[15px]'>Trusted by Learners from</p>
    <div className='flex gap-6 items-center '>
      <img className='' src={assets.microsoft_logo} alt="microsoft" />
      <img src={assets.walmart_logo} alt="walmart" />
      <img src={assets.accenture_logo} alt="accenture" />
      <img src={assets.paypal_logo} alt="paypal" />
      <img src={assets.adobe_logo} alt="adobe" />

    </div>
    </div>
  )
}

export default Companies