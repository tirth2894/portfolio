import React from 'react'

function skills() {
    return (
        <div className='flex flex-wrap'>
            <div className='my-3 w-full md:w-1/3 px-5'>
                <p className='text-center text-3xl m-4'>Skills</p>
                <div className='flex flex-wrap'>
                    <span className='bg-[#b72860] m-2 text-xl px-3 py-1.5 rounded-3xl'>HTML</span>
                    <span className='bg-[#b72860] m-2 text-xl px-3 py-1.5 rounded-3xl'>Css</span>
                    <span className='bg-[#b72860] m-2 text-xl px-3 py-1.5 rounded-3xl'>JavaScript</span>
                    <span className='bg-[#b72860] m-2 text-xl px-3 py-1.5 rounded-3xl'>PHP</span>
                    <span className='bg-[#b72860] m-2 text-xl px-3 py-1.5 rounded-3xl'>MySql</span>
                    <span className='bg-[#b72860] m-2 text-xl px-3 py-1.5 rounded-3xl'>C</span>
                    <span className='bg-[#b72860] m-2 text-xl px-3 py-1.5 rounded-3xl'>C++</span>
                    <span className='bg-[#b72860] m-2 text-xl px-3 py-1.5 rounded-3xl'>Pyhton</span>
                </div>
            </div>

            <div className='my-3 px-5 w-full md:w-2/3'>
                <p className='text-center text-3xl m-4'>Activity</p>

                <div className='p-4 bg-[#1f4552] rounded-2xl my-4'>
                    <p className='text-xl font-semibold'>
                        Participated in event management
                    </p>
                    <p>
                        Participated as Team leader of technical team in Tech Kaushalya technical event managed by Department of Computer Science. 
                    </p>
                </div>

                <div className='p-4 bg-[#1f4552] rounded-2xl my-4'>
                    <p className='text-xl font-semibold'>
                        Participated in Hackathons
                    </p>
                    <p>
                        Participated Smart India Hackathon(SIH) 2023.
                    </p>
                    <p>
                        Participated in Hack-NU-thon 5.0 at Nirma University.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default skills