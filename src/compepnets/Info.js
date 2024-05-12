import React from 'react'
import uphoto from './uphoto.png'

function Info() {
  return (
        <div className='flex py-7 flex-wrap-reverse w-full justify-evenly items-center'>
            <div className='my-5 mx-2 flex flex-col justify-center items-start' >
                <p className='text-2xl md:text-3xl '>
                    Hi, I am <span className='font-extrabold text-[#b72860] '>Tirth Patel</span>
                </p>
                <p className='text-xl md:text-2xl'>
                    A Web Developer
                </p>
            </div>

            <div className='h-[25rem] w-[25rem] flex justify-center items-center'>
                <img src={uphoto} alt="Photo" className='h-full'/>
            </div>
        </div>
  )
}

export default Info
