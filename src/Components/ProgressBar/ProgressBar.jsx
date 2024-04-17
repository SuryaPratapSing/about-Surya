import React from 'react'

const ProgressBar = () => {
  return (
    <div className='w-10 h-10 fixed right-24 top-1/2'>
        <div className='h-2 w-2 bg-[#4731d4] cursor-pointer rotate-45'></div>
        <div className='h-2 w-2 bg-[#4731d4] cursor-pointer rotate-45 mt-4'></div>
        <div className='h-2 w-2 bg-[#4731d4] cursor-pointer rotate-45 mt-4'></div>
        <div className='h-2 w-2 bg-[#4731d4] cursor-pointer rotate-45 mt-4'></div>
        <div className='h-2 w-2 bg-[#4731d4] cursor-pointer rotate-45 mt-4'></div>

    </div>
  )
}

export default ProgressBar