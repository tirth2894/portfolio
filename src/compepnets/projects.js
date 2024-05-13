import React from 'react'
import project1 from './project1.png'
function Projects() {
    return (
        <div className='w-full'>
            <p className='text-center text-2xl md:text-3xl m-4' id='project'>Projects</p>
            <div className='flex flex-wrap justify-center items-center'>

                <a href="https://homotrack.wuaze.com/" target='_blank' className='w-80 m-5 rounded-lg bg-[#1f4552] block hover:bg-[#214d5c]'>
                    <img src={project1} alt="Photo" className='w-full p-2 h-[13rem]' />

                    <p className='p-2 w-full'>
                        <span className='text-xl font-bold'>Homotrack</span>
                        <p>A Homotrack, a dynamic blood bank management system designed to streamline the process of blood donation and distribution. With its user-friendly interface and robust functionality.</p>
                    </p>
                </a>
            </div>
        </div>
    )
}

export default Projects
