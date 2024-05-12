import React, { useState } from 'react'
import * as Unicons from '@iconscout/react-unicons';
import qrCode from './qr.png'

function Navbar() {

    let [menu, setmenu] = useState(false);

    let toogle = () => {
        setmenu(!menu);
    }

    return (
        <>
             {/* Mobile view */}
             <div className={menu ? 'h-screen w-full bg-[#0a283bf5] p-5 fixed' : 'hidden'}>
                <Unicons.UilTimes onClick={toogle} height="40" width="40" color="white" className='float-right lg:hidden' />
                <ul className='text-xl flex flex-col mt-16 items-center'>
                    <li className='px-4 hover:text-[#b72860] mt-5 w-full text-center py-3' onClick={toogle}>
                        <a href="#home">Home</a>
                    </li>
                    <li className='px-4 hover:text-[#b72860] mt-5 w-full text-center py-3' onClick={toogle}>
                        <a href="#about">About</a>
                    </li>
                    <li className='px-4 hover:text-[#b72860] mt-5 w-full text-center py-3' onClick={toogle}>
                        <a href="#project">Project</a>
                    </li>
                </ul>
            </div>

            <div className='m-0 flex justify-between items-center py-2 w-full'>
                <p className='text-3xl p-2 px-4 font-semibold' id='home'>Portfolio</p>
                <Unicons.UilBars onClick={toogle} height="30" width="30" color="white" className='float-right lg:hidden mr-2' />
                <ul className='lg:flex text-xl justify-center items-center hidden p-2'>
                    <li className='px-4 hover:text-[#b72860] transition-all duration-300'>
                        <a href="#home">Home</a>
                    </li>
                    <li className='px-4 hover:text-[#b72860] transition-all duration-300'>
                        <a href="#about">About</a>
                    </li>
                    <li className='px-4 hover:text-[#b72860] transition-all duration-300'>
                        <a href="#project">Project</a>
                    </li>
                </ul>
            </div>           
        </>

    );
}

export default Navbar
