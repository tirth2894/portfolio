import React from 'react'
import uphoto from './uphoto.png'
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";


function Intro() {
    return (
        <div className='flex py-7 flex-wrap-reverse w-full justify-evenly items-center overflow-hidden'>

                <div className='my-5 mx-2 flex flex-col justify-center items-start' >
                    <p className='text-2xl md:text-3xl '>
                        Hi, I am <span className='font-bold text-[#b72860] '>Tirth Patel</span>
                    </p>
                    <p className='text-xl md:text-2xl'>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'A Student',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'A Web developer',
                                1000,
                            ]}
                            wrapper="span"
                            speed={200}
                            repeat={Infinity}
                        />
                    </p>

                    <div className='flex mt-2'>

                        <a href="https://www.linkedin.com/in/tirth-patel-0a5a18257/" target='_blank' rel="noopener noreferrer">
                            <FaLinkedin title='Linkedin' className='m-2 ml-0 h-7 w-7 hover:text-[#b72860]' />
                        </a>
                        <a href="https://github.com/tirth2894" target='_blank' rel="noopener noreferrer">
                            <FaGithub title='Github' className='m-2 h-7 w-7 hover:text-[#b72860]' />
                        </a>
                    </div>
                </div>


                <div className='h-[25rem] flex justify-center items-center'>
                    <img src={uphoto} alt='UserPhoto' className='h-full' />
                </div>

        </div>
    )
}

export default Intro
