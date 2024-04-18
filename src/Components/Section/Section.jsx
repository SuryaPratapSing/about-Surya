import React from 'react'

const Section = () => {
    return (
        <div className='w-full h-auto md:h-screen flex justify-center bg-gray-50 pt-36 pb-28'>
            <div className='w-11/12 h-full m-auto bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded md:flex'>
                <div className='w-full md:w-1/2 h-full border-b-2 md:border-b-0 md:border-r-2 border-blue-400 pl-20 flex items-center py-16 md:py-0'>
                    <div className='h-fit'>
                        <h1 className='font-extrabold text-3xl md:text-5xl text-[#4731d4] '>I build & <br />design stuff</h1>
                        <p className='md:text-2xl font-light mt-10'>Open source <br /> projects, web apps<br /> and experimentals.</p>
                        <button className='py-2 md:py-4 px-6 md:px-16 flex gap-5 border border-[#4731d4] rounded mt-10 items-center text-xs md:text-sm font-semibold text-[#4731d4] hover:bg-[#4731d4] hover:text-white transition-all duration-300 ease-in-out'>SEE MY WORKS <i class="fa-solid fa-arrow-right-long text-xl"></i></button>

                    </div>
                </div>
                <div className='w-1/2 h-full pl-20 flex items-center'>
                    <div className='h-fit py-16 md:py-0'>
                        <h1 className='font-extrabold text-3xl md:text-5xl text-[#4731d4] '>I write,<br /> sometimes</h1>
                        <p className='md:text-2xl font-light mt-10'>About design,
                            <br /> frontend dev,<br /> learning and life.</p>
                        <button className='py-2 md:py-4 px-6 md:px-16 flex gap-5 border border-[#4731d4] rounded mt-10 items-center text-xs md:text-sm font-semibold text-[#4731d4] hover:bg-[#4731d4] hover:text-white transition-all duration-300 ease-in-out'>READ MY ARTICLES <i class="fa-solid fa-arrow-right-long text-xl"></i></button>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Section