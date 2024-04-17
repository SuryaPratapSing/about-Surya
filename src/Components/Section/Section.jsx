import React from 'react'
import icon from './right.png'

const Section = () => {
    return (
        <div className='w-full h-screen flex justify-center bg-gray-50 pt-36 pb-28'>
            <div className='w-11/12 h-full m-auto bg-white flex'>
                <div className='w-1/2 h-full border-r-2 border-blue-400 pl-20 flex items-center'>
                    <div className='h-fit'>
                        <h1 className='font-extrabold text-5xl text-[#4731d4] '>I build & <br />design stuff</h1>
                        <p className='text-2xl font-light mt-10'>Open source <br /> projects, web apps<br /> and experimentals.</p>
                        <button className='py-4 px-16 flex gap-5 border border-[#4731d4] rounded mt-10 items-center text-sm font-semibold text-[#4731d4] hover:bg-[#4731d4] hover:text-white transition-all duration-300 ease-in-out'>SEE MY WORKS <i class="fa-solid fa-arrow-right-long text-xl"></i></button>





                    </div>
                </div>
                <div className='w-1/2 h-full pl-20 flex items-center'>
                    <div className='h-fit'>
                        <h1 className='font-extrabold text-5xl text-[#4731d4] '>I write,<br /> sometimes</h1>
                        <p className='text-2xl font-light mt-10'>About design,
                            <br /> frontend dev,<br /> learning and life.</p>
                        <button className='py-4 px-16 flex gap-5 border border-[#4731d4] rounded mt-10 items-center text-sm font-semibold text-[#4731d4] hover:bg-[#4731d4] hover:text-white transition-all duration-300 ease-in-out'>READ MY ARTICLES <i class="fa-solid fa-arrow-right-long text-xl"></i></button>




                    </div>
                </div>

            </div>
        </div>
    )
}

export default Section