import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { CiShare1 } from "react-icons/ci";


function EducationProjects() {
    return (

            <div className='flex flex-wrap justify-evenly'>

                <div className='w-full md:w-1/3 mx-3 my-3 px-4 bg-[#15374d] rounded-2xl' id='about'>
                    <p className='text-center text-2xl md:text-3xl m-4'>Education</p>

                    <ol className="relative border-s border-gray-600">
                        <li className="mb-5 ms-4">
                            <div className="absolute w-3 h-3 bg-gray-500 rounded-full mt-1.5 -start-1.5 border border-gray-500"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400">March 2019-20</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">SSC</h3>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Ahmedabad, Gujarat</p>
                        </li>
                        <li className="mb-5 ms-4">
                            <div className="absolute w-3 h-3 bg-gray-500 rounded-full mt-1.5 -start-1.5 border border-gray-500"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400">March 2021-22</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">HSC</h3>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Ahmedabad, Gujarat</p>
                        </li>
                        <li className="mb-5 ms-4">
                            <div className="absolute w-3 h-3 bg-[#b72860] rounded-full mt-1.5 -start-1.5 border border-[#b72860] animate-ping"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400">June 2022-Present</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Bachelor in Computer science</h3>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Gujarat University, Ahmedabad, Gujarat</p>
                        </li>
                    </ol>
                </div>

                <div className='w-full md:w-3/5 mx-3 my-3 pb-2 bg-[#15374d] rounded-2xl' id='project'>
                    <p className='text-center text-2xl md:text-3xl m-4' >Projects</p>

                    <div className='flex flex-wrap justify-evenly items-center'>
                        <div className='w-[16rem] my-3 rounded-lg bg-[#b72860] block hover:bg-[#0a283b] hover:transition duration-300 hover:translate-y-[-10px]'>
                            <div className='p-4 w-full'>
                                <p className='text-xl font-bold mb-1'>Cityscape Challenges</p>
                                <p>Embark on an urban adventure, where players complete missions to uncover hidden treasures. Explore dynamic game zones designed to challenge and entertain.</p>
                                <div className='flex items-center mt-3'>
                                    <a href="https://github.com/tirth2894/Cityscape_Challenge" target='_blank' rel="noopener noreferrer">
                                        <FaGithub title='Github' className='h-7 w-7' />
                                    </a>
                                    <a href="https://tirth2894.github.io/Cityscape_Challenge/" target='_blank' rel="noopener noreferrer">
                                        <button className='mx-3 border-2 border-white p-1 rounded-lg hover:bg-white hover:text-[#0a283b]'>
                                            Let's try <CiShare1 title='try' className='h-5 w-5 inline-block ' />
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className='w-[16rem] my-3 rounded-lg bg-[#b72860] block hover:bg-[#0a283b] hover:transition duration-300 hover:translate-y-[-10px]'>
                            <div className='p-4 w-full'>
                                <p className='text-xl font-bold mb-1'>Homotrack</p>
                                <p>A Homotrack, a dynamic blood bank management system designed to streamline the process of blood donation and distribution. With its user-friendly interface.</p>
                                <div className='flex items-center mt-3'>
                                    <a href="https://github.com/tirth2894/Blood-Bank" target='_blank' rel="noopener noreferrer">
                                        <FaGithub title='Github' className='h-7 w-7' />
                                    </a>
                                    <a href="https://homotracks.wuaze.com" target='_blank' rel="noopener noreferrer">
                                        <button className='mx-3 border-2 border-white p-1 rounded-lg hover:bg-white hover:text-[#0a283b]'>
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

export default EducationProjects
