import React from 'react'
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";


function SideContact() {
    return (
        <div className='fixed top-[40%] rounded-e-2xl shadow-3xl bg-[#1f455285] px-1 border-e-2 border-[#b72860]'>

            <a href="#">
                <FaLinkedin title='Linkedin' className='my-3 h-7 w-7 animate-bounce hover:animate-none hover:text-[#b72860]' />
            </a>
            <a href="#">
                <IoMdMail title='Mail' className='my-3 h-7 w-7 animate-bounce hover:animate-none hover:text-[#b72860]' />
            </a>
            <a href="#">
                <FaGithub title='Github' className='my-3 h-7 w-7 animate-bounce hover:animate-none hover:text-[#b72860]' />
            </a>

        </div>
    )
}

export default SideContact
