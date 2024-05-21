import React from 'react'
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";


function Contact() {
    return (
        <div className="py-6 flex justify-evenly" id='contact'>

            <div className="mx-3 lg:mx-6 grid sm:grid-cols-2 items-center gap-16 px-4 py-8 bg-[#15374d] shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-2xl">
                <div>
                    <h1 className="text-3xl font-semibold">Let's Talk</h1>
                    <p className="text-sm text-gray-400 mt-3">Have some idea or brand to develop and need help? Then reach out i'd love to hear about your requirements.</p>
                    <div className="mt-12">
                        <h2 className="text-lg font-semibold">Email</h2>
                        <ul className="mt-3">
                            <li className="flex items-center">
                                <a href="mailto:tirthptl2894@gmail.com" rel="noopener noreferrer" target='_blank'>
                                    <div className="bg-[#0a283b] h-10 w-10 rounded-full flex items-center justify-center shrink-0 text-white hover:text-[#b72860] hover:translate-y-[-7px] transition-all duration-400">
                                        <IoMdMail className='w-6 h-6' />
                                    </div>
                                </a>
                                <div className='ml-2'>
                                    <small className="block">Mail</small>
                                    <p className='font-semibold'>tirthptl2894@gmail.com</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-lg font-semibold">Socials</h2>
                        <ul className="flex mt-3 space-x-4">
                            <a href="https://www.linkedin.com/in/tirth-patel-0a5a18257/" target='_blank' rel="noopener noreferrer">
                                <li className="bg-[#0a283b] h-10 w-10 rounded-full flex items-center justify-center shrink-0 text-white hover:text-[#b72860] hover:translate-y-[-7px] transition-all duration-400">
                                    <FaGithub className='w-7 h-7  ' />
                                </li>
                            </a>
                            <a href="https://www.linkedin.com/in/tirth-patel-0a5a18257/" target='_blank' rel="noopener noreferrer">
                                <li className="bg-[#0a283b] h-10 w-10 rounded-full flex items-center justify-center shrink-0 text-white hover:text-[#b72860] hover:translate-y-[-7px] transition-all duration-400">
                                    <FaLinkedin className='w-6 h-6  ' />
                                </li>
                            </a>
                            <a href="https://www.instagram.com/_tirth_patel_04_" target='_blank' rel="noopener noreferrer">
                                <li className="bg-[#0a283b] h-10 w-10 rounded-full flex items-center justify-center shrink-0 text-white hover:text-[#b72860] hover:translate-y-[-7px] transition-all duration-400">
                                    <AiFillInstagram className='w-7 h-7 ' />
                                </li>
                            </a>
                        </ul>
                    </div>
                </div>

                <form className="ml-auo space-y-4">
                    <input type='text' placeholder='Name'
                        className="w-full rounded-md py-2.5 px-4 text-sm outline-none bg-[#0a283b]" />
                    <input type='email' placeholder='Email'
                        className="w-full rounded-md py-2.5 px-4 text-sm outline-none bg-[#0a283b]" />
                    <input type='text' placeholder='Subject'
                        className="w-full rounded-md py-2.5 px-4 text-sm outline-none bg-[#0a283b]" />
                    <textarea placeholder='Message' rows="6"
                        className="w-full rounded-md px-4 text-sm pt-2.5 outline-none bg-[#0a283b]"></textarea>
                    <button type='button'
                        className="text-white bg-[#b72860] hover:bg-[#b93e6d] font-semibold rounded-md text-sm px-4 py-2.5 w-full">Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
