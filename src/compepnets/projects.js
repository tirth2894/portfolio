import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { CiShare1 } from "react-icons/ci";


function Projects() {
    return (
        <div className='w-full flex flex-wrap justify-evenly'>

            <div className='w-full md:w-1/3 mx-3 my-3 px-4 bg-[#15374d] rounded-2xl'>
                <p className='text-center text-2xl md:text-3xl m-4'>Education</p>

                <ol class="relative border-s border-gray-600">
                    <li class="mb-5 ms-4">
                        <div class="absolute w-3 h-3 bg-gray-500 rounded-full mt-1.5 -start-1.5 border border-gray-500"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-400">March 2019-20</time>
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">SSC</h3>
                        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Ahmedabad, Gujarat</p>
                    </li>
                    <li class="mb-5 ms-4">
                        <div class="absolute w-3 h-3 bg-gray-500 rounded-full mt-1.5 -start-1.5 border border-gray-500"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-400">March 2021-22</time>
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">HSC</h3>
                        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Ahmedabad, Gujarat</p>
                    </li>
                    <li class="mb-5 ms-4">
                        <div class="absolute w-3 h-3 bg-[#b72860] rounded-full mt-1.5 -start-1.5 border border-[#b72860] animate-ping"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-400">June 2022-Present</time>
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Bachelor in Computer science</h3>
                        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Gujarat University, Ahmedabad, Gujarat</p>
                    </li>
                </ol>


            </div>

            <div className='w-full md:w-3/5 mx-3 my-3 pb-2 bg-[#15374d] rounded-2xl'>
                <p className='text-center text-2xl md:text-3xl m-4' id='project'>Projects</p>

                <div className='flex flex-wrap justify-evenly items-center'>
                    <div className='h-72 w-[16rem] my-3 rounded-lg bg-[#b72860] block hover:bg-[#1f4552] hover:transition duration-300 hover:translate-y-[-10px]'>
                        <div className='p-4 w-full'>
                            <p className='text-xl font-bold my-1'>Cityscape Challenges</p>
                            <p>Embark on an urban adventure with my city game, completing tasks to uncover hidden treasures. Explore dynamic game zones designed to challenge and entertain for an immersive experience.</p>
                            <div className='flex items-center mt-3'>
                                <a href="#">
                                    <FaGithub title='Github' className='h-7 w-7 hover:text-[#b72860]' />
                                </a>
                                <a href="#">
                                    <button className='mx-3 border-2 border-white p-1 rounded-lg hover:bg-[#b72860]'>
                                        Let's try <CiShare1 title='try' className='h-5 w-5 inline-block ' />
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='h-72 w-[16rem] my-3 rounded-lg bg-[#b72860] block hover:bg-[#1f4552] hover:transition duration-300 hover:translate-y-[-10px]'>
                        <div className='p-4 w-full'>
                            <p className='text-xl font-bold my-1'>Homotrack</p>
                            <p>A Homotrack, a dynamic blood bank management system designed to streamline the process of blood donation and distribution. With its user-friendly interface and robust functionality.</p>
                            <div className='flex items-center mt-3'>
                                <a href="#">
                                    <FaGithub title='Github' className='h-7 w-7 hover:text-[#b72860]' />
                                </a>
                                <a href="#">
                                    <button className='mx-3 border-2 border-white p-1 rounded-lg hover:bg-[#b72860]'>
                                        Let's try <CiShare1 title='try' className='h-5 w-5 inline-block ' />
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Projects
