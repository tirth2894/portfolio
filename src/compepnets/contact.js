import React, { useState } from 'react'
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import emailjs from '@emailjs/browser';


function Contact() {

    const [showAlert, setshowAlert] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        let valid = true;

        if(e.target.from_name.value.length < 1 || e.target.from_email.value.length < 1 || e.target.message.value.length < 1)
        {
            valid = false;
        }

        if (valid) {
            emailjs.sendForm('service_ue1f3ox', 'template_kgf9nvg', e.target, 'jZyjJwVXfp0XXgKSE')
            .then((response) => {
                if(response.text === "OK")
                {
                    setshowAlert(true);
            
                    setTimeout(() => {
                        setshowAlert(false);
                    }, 4000);
                }
            });
            
        }
    }

    return (
        <>
            <div className={showAlert ? "fixed top-0 right-[0.5rem] flex items-center p-4 m-4  text-sm text-green-600 rounded-lg bg-[#103953]" : "hidden"} role="alert">
                <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="sr-only">Info</span>
                <div>
                    <span className="font-medium">Success!</span> Your message sent successfully.
                </div>
            </div>

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
                                <a href="https://github.com/tirth2894" target='_blank' rel="noopener noreferrer">
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

                    <form className="ml-auo space-y-4" onSubmit={sendEmail}>
                        <input type='text' placeholder='Name' name='from_name'
                            className="w-full rounded-md py-2.5 px-4 text-sm outline-none bg-[#0a283b]" />
                        <input type='email' placeholder='Email' name='from_email'
                            className="w-full rounded-md py-2.5 px-4 text-sm outline-none bg-[#0a283b]" />
                        <textarea placeholder='Message' rows="6" name='message'
                            className="w-full rounded-md px-4 text-sm pt-2.5 outline-none bg-[#0a283b]"></textarea>
                        <button type='submit'
                            className="text-white bg-[#b72860] hover:bg-[#b93e6d] font-semibold rounded-md text-sm px-4 py-2.5 w-full">Send</button>
                    </form>
                </div>
            </div>
        </>

    )
}

export default Contact
