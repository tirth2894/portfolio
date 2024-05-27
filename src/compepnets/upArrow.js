import React from 'react'
import { FaArrowUp } from "react-icons/fa";


function UpArrow() {
  return (
    <a href="#home">
      <div className='fixed bottom-3 right-2 w-10 h-10 mr-2 flex justify-center items-center rounded-full bg-[#b7285fec]'>
        <FaArrowUp className='h-6 w-6' />
      </div>
    </a>

  )
}

export default UpArrow
