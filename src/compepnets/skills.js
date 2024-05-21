import React from 'react'

function skills() {
    return (
        <div className='flex flex-wrap justify-evenly'>
            <div className='my-3 mx-3 w-full md:w-1/3 px-5 py-5 bg-[#15374d] rounded-2xl ' id='about'>
                <p className='text-center text-2xl md:text-3xl mx-4' >Skills</p>
                <div className='flex flex-wrap items-center mt-4'>
                    <span className='bg-[#b72860] m-2 text-lg px-3 py-1 rounded-3xl'>HTML</span>
                    <span className='bg-[#b72860] m-2 text-lg px-3 py-1 rounded-3xl'>Css</span>
                    <span className='bg-[#b72860] m-2 text-lg px-3 py-1 rounded-3xl'>JavaScript</span>
                    <span className='bg-[#b72860] m-2 text-lg px-3 py-1 rounded-3xl'>Jquery</span>
                    <span className='bg-[#b72860] m-2 text-lg px-3 py-1 rounded-3xl'>PHP</span>
                    <span className='bg-[#b72860] m-2 text-lg px-3 py-1 rounded-3xl'>MySql</span>
                    <span className='bg-[#b72860] m-2 text-lg px-3 py-1 rounded-3xl'>C</span>
                    <span className='bg-[#b72860] m-2 text-lg px-3 py-1 rounded-3xl'>C++</span>
                    <span className='bg-[#b72860] m-2 text-lg px-3 py-1 rounded-3xl'>Python</span>
                </div>
            </div>

            <div className='my-3 mx-3 px-5 w-full md:w-3/5 bg-[#15374d] rounded-2xl'>
                <p className='text-center text-2xl md:text-3xl m-4'>Activity</p>

                <div className='px-4 pb-3 my-2'>
                    <p className='text-xl font-bold'>
                        Participated Hackathons
                    </p>
                    <p>
                        ~ In 2023 Smart India Hackathon(SIH).
                    </p>
                    <p>
                        ~ In 2024 Hack-NU-thon 5.0 at Nirma University.
                    </p>
                </div>

                <div className='px-4 pb-3 my-2'>
                    <p className='text-xl font-bold'>
                        Participated in event management
                    </p>
                    <p>
                        ~ In 2023 & 2024 Participated in technical team of Tech Kaushalya technical event organized by Department of Computer Science.
                    </p>
                </div>


            </div>
        </div>
    )
}

export default skills
