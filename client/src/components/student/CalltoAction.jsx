import React from 'react'
import {assets} from "../../assets/assets"
const CalltoAction = () => {
  return (
    <div className='flex flex-col gap-3 mt-11 justify-center items-center mb-10'>
      <h1 className='text-4xl font-semibold'>Learn anything, anytime, anywhere</h1>
<p className='w-[30rem] text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora earum dolorum aliquid dololuptatum neque eligendi quidem suscipit corrupti minus. </p>
<div className='flex gap-5'>
  <button className='border-[1px] text-white hover:text-blue-600 border-black px-5 py-2 bg-blue-600 hover:bg-white rounded-md'>Get Started</button>
  <button className='group flex items-center justify-center gap-2 border-[1px] text-white hover:text-blue-600 border-black px-5 py-2 bg-blue-600 hover:bg-white rounded-md'>Learn More <img className='h-4 invert transition duration-150 group-hover:[filter:invert(27%)_sepia(91%)_saturate(2352%)_hue-rotate(212deg)_brightness(97%)_contrast(96%)]' src={assets.arrow_icon} alt="arrow" /></button>
</div>
    </div>
  )
}

export default CalltoAction