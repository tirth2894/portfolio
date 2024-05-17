import React from 'react'

function Projects() {
    return (
        <div className='w-full'>
            <p className='text-center text-2xl md:text-3xl m-4' id='project'>Projects</p>
            
            <div className='flex flex-wrap justify-center items-center'>
                <a href="#" title='Click to try' target='_blank' className='w-80 h-56 m-5 rounded-lg bg-[#b72860] block hover:bg-[#1f4552] hover:transition duration-300 hover:translate-y-[-10px]'>
                    {/* <img src={project1} alt="Photo" className='w-full p-2 h-[13rem]' /> */}

                    <div className='p-4 w-full'>
                        <p className='text-xl font-bold'>Cityscape Challenges</p>
                        <p>Embark on an urban adventure with my city game, completing tasks to uncover hidden treasures. Explore dynamic game zones designed to challenge and entertain for an immersive experience.</p>
                    </div>
                </a>

                <a href="#" title='Click to try' target='_blank' className='w-80 h-56 m-5 rounded-lg bg-[#b72860] block hover:bg-[#1f4552] hover:transition duration-300 hover:translate-y-[-10px]'>
                    {/* <img src={project1} alt="Photo" className='w-full p-2 h-[13rem]' /> */}

                    <div className='p-4 w-full'>
                        <p className='text-xl font-bold'>Homotrack</p>
                        <p>A Homotrack, a dynamic blood bank management system designed to streamline the process of blood donation and distribution. With its user-friendly interface and robust functionality.</p>
                    </div>
                </a>
            </div>

        </div>
    )
}

export default Projects
