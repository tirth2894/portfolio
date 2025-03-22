import React, { useState, useEffect } from 'react';
import uphoto from './images/uphoto.png';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Intro() {
    const [posX, setPosX] = useState(0);
    const [posY, setPosY] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { innerWidth, innerHeight } = window;
            // Normalize position to range [-1, 1]
            const x = (e.clientX / innerWidth - 0.9) * 2;
            const y = (e.clientY / innerHeight - 0.9) * 2;

            // Move image slightly (adjust sensitivity)
            setPosX(x * -10);
            setPosY(y * -10);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className='flex py-7 flex-wrap-reverse w-full justify-evenly items-center overflow-hidden' id='about'>
            <div className='my-5 mx-2 flex flex-col justify-center items-start'>
                <p className='text-2xl md:text-3xl '>
                    Hi, I am 
                    <span className='font-bold text-primary'> Tirth Patel </span>
                </p>
                <p className='text-xl md:text-2xl'>
                    <TypeAnimation
                        sequence={[
                            'A Student',
                            1000,
                            'A Web Developer',
                            1000,
                            'A Freelancer',
                            1000,
                        ]}
                        wrapper="span"
                        speed={200}
                        repeat={Infinity}
                    />
                </p>

                <div className='flex mt-2'>
                    <a href="https://www.linkedin.com/in/tirth-patel-0a5a18257/" target='_blank' rel="noopener noreferrer">
                        <FaLinkedin title='Linkedin' className='m-2 ml-0 h-7 w-7 hover:text-primary' />
                    </a>
                    <a href="https://github.com/tirth2894" target='_blank' rel="noopener noreferrer">
                        <FaGithub title='Github' className='m-2 h-7 w-7 hover:text-primary' />
                    </a>
                </div>
            </div>

            {/* Image with Page-Wide Floating Effect */}
            <div className="h-[25rem] flex justify-center items-center">
                <img
                    src={uphoto}
                    alt='UserPhoto'
                    className='h-full transition-transform duration-100'
                    style={{
                        transform: `translate(${posX}px, ${posY}px)`,
                    }}
                />
            </div>
        </div>
    );
}

export default Intro;
