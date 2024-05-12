import React from 'react'
import * as Unicons from '@iconscout/react-unicons';

function SideContact() {
    return (
        <div className='fixed top-[40%] rounded-e-2xl shadow-3xl bg-[#1f455285] px-1 border-e-2 border-[#b72860]'>

            <a href="">
                <Unicons.UilLinkedin className='my-3 animate-bounce hover:animate-none hover:text-[#b72860]' height='35' width='35' />
            </a>
            <a href="">
                <Unicons.UilTwitter className='my-3 animate-bounce hover:animate-none hover:text-[#b72860]' height='35' width='35' />
            </a>
            <a href="https://github.com/tirth2894">
                <Unicons.UilGithub className='my-3 animate-bounce hover:animate-none hover:text-[#b72860]' height='35' width='35' />
            </a>

        </div>
    )
}

export default SideContact
