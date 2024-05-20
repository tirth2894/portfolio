import React from 'react'
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function Contact() {
    return (
        <div className="py-6 flex justify-evenly" id='contact'>

            <div class="mx-3 lg:mx-6 grid sm:grid-cols-2 items-center gap-16 px-4 py-8 bg-[#15374d] shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-2xl">
                <div>
                    <h1 class="text-3xl font-extrabold">Let's Talk</h1>
                    <p class="text-sm text-gray-400 mt-3">Have some idea or brand to develop and need help? Then reach out i'd love to hear about your requirements.</p>
                    <div class="mt-12">
                        <h2 class="text-lg font-extrabold">Email</h2>
                        <ul class="mt-3">
                            <li class="flex items-center">
                                <div class="bg-[#0a283b] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <IoMdMail className='w-6 h-6 text-[#b72860]'/>
                                </div>
                                <a target="blank" href="#" class="text-sm ml-3">
                                    <small class="block">Mail</small>
                                    <strong>tirthptl2894@gmail.com</strong>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="mt-12">
                        <h2 class="text-lg font-extrabold">Socials</h2>
                        <ul class="flex mt-3 space-x-4">
                            <li class="bg-[#0a283b] h-10 w-10 rounded-full flex items-center justify-center shrink-0 hover:translate-y-[-7px] transition-all duration-400">
                                <a href="javascript:void(0)">
                                    <FaLinkedin className='w-6 h-6 text-[#b72860] '/>
                                </a>
                            </li>
                            <li class="bg-[#0a283b] h-10 w-10 rounded-full flex items-center justify-center shrink-0 hover:translate-y-[-7px] transition-all duration-400">
                                <a href="javascript:void(0)">
                                    <AiFillInstagram className='w-7 h-7 text-[#b72860]'/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <form class="ml-auo space-y-4">
                    <input type='text' placeholder='Name'
                        class="w-full rounded-md py-2.5 px-4 text-sm outline-none bg-[#0a283b]" />
                    <input type='email' placeholder='Email'
                        class="w-full rounded-md py-2.5 px-4 text-sm outline-none bg-[#0a283b]" />
                    <input type='text' placeholder='Subject'
                        class="w-full rounded-md py-2.5 px-4 text-sm outline-none bg-[#0a283b]" />
                    <textarea placeholder='Message' rows="6"
                        class="w-full rounded-md px-4 text-sm pt-2.5 outline-none bg-[#0a283b]"></textarea>
                    <button type='button'
                        class="text-white bg-[#b72860] hover:bg-[#b93e6d] font-semibold rounded-md text-sm px-4 py-2.5 w-full">Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
