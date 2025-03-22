import React, { useState } from 'react'

function SkillsActivity() {

    const [skills] = useState([
        'HTML', 'CSS', 'JavaScript', 'TailwindCss', 'React Js', 'Node Js', 'Jquery', 'PHP', 'MySql', 'MongoDB', 'C', 'C++', 'Python'
    ]);

    return (

        <div className='flex flex-wrap justify-evenly'>
           <div className='my-3 mx-3 w-full md:w-1/3 px-5 py-5 bg-[#15374d]/80 backdrop-blur-2xl rounded-2xl'>
                <p className='text-center text-2xl md:text-3xl mx-4'>Skills</p>
                <div className='flex flex-wrap items-center mt-4'>
                    {skills.map((skill, index) => (
                        <span key={index} className='bg-primary m-2 text-lg px-3 py-1 rounded-3xl'>{skill}</span>
                    ))}
                </div>
            </div>


            <div className='my-3 mx-3 px-5 w-full md:w-3/5 bg-[#15374d]/80 backdrop-blur-2xl rounded-2xl'>
                <p className='text-center text-2xl md:text-3xl m-4'>Activity</p>

                <div className='px-4 py-2 my-3'>
                    <p className='text-xl font-bold'>
                        Participated in Hackathons :
                    </p>
                    <p>
                        ~ Smart India Hackathon (SIH) 2023.
                    </p>
                    <p>
                        ~ Hack-NU-thon 5.0 at Nirma University 2024.
                    </p>
                </div>

                <div className='px-4 pb-3 my-3'>
                    <p className='text-xl font-bold'>
                        Participated in Event Management :
                    </p>
                    <p>
                        ~ Member of the technical team for Tech Kaushalya, a technical event organized by the Department of Computer Science, in 2023 and 2024.
                    </p>
                </div>


            </div>
        </div>

    )
}

export default SkillsActivity
