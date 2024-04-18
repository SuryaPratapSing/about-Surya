import React from 'react'

const Footer = () => {
    return (
        <div className='w-full h-screen bg-[#3d1660] flex items-center'>
            <div className='w-4/5 h-fit m-auto'>
                <h2 className='text-gray-300 text-lg tracking-widest'>SAY HELLO</h2>
                <div className=' text-[#BADD76] text-lg w-1/2 md:flex justify-between'>
                    <ul className='leading-[3rem]'>
                        <li className="transition-colors duration-300 relative group z-20 flex items-center cursor-pointer w-fit">
                            <span className="group-hover:bg-zinc-100/30 w-5 h-5 -right-3 absolute transition-all duration-300"></span>
                            hello@suryap.netlify.app
                        </li>

                        <li className="transition-colors duration-300 relative group z-20 flex items-center cursor-pointer w-fit">
                            <span className="group-hover:bg-zinc-100/30 w-5 h-5 -right-3 absolute transition-all duration-300"></span>
                            wht/mrsurya
                        </li>


                    </ul>
                    <ul className='leading-[3rem] mt-10 md:mt-0'>
                        <li className="transition-colors duration-300 relative group z-20 flex items-center cursor-pointer w-fit">
                            <span className="group-hover:bg-zinc-100/30 w-5 h-5 -right-3 absolute transition-all duration-300"></span>
                            My Work
                        </li>

                        <li className="transition-colors duration-300 relative group z-20 flex items-center cursor-pointer w-fit">
                            <span className="group-hover:bg-zinc-100/30 w-5 h-5 -right-3 absolute transition-all duration-300"></span>
                            My Shelf
                        </li>


                        <li className="transition-colors duration-300 relative group z-20 flex items-center cursor-pointer w-fit">
                            <span className="group-hover:bg-zinc-100/30 w-5 h-5 -right-3 absolute transition-all duration-300"></span>
                            My Resume
                        </li>


                    </ul>
                </div>
                <div className='border-t text-[#BADD76] border-[#8bb339] mt-32 w-full h-32 flex justify-between items-center'>
                    <p>© surya 2024 rights reserved</p>
                    <ul className='md:flex gap-8 text-lg hidden'>
                    <li className="transition-colors duration-300 relative group z-20 flex items-center cursor-pointer w-fit">
                            <span className="group-hover:bg-zinc-100/30 w-5 h-5 -right-3 absolute transition-all duration-300"></span>
                            WT
                        </li>

                        <li className="transition-colors duration-300 relative group z-20 flex items-center cursor-pointer w-fit">
                            <span className="group-hover:bg-zinc-100/30 w-5 h-5 -right-3 absolute transition-all duration-300"></span>
                            <a href='https://github.com/SuryaPratapSing'>GH</a>
                        </li>

                        <li className="transition-colors duration-300 relative group  z-20 flex items-center cursor-pointer w-fit">
                            <span className="group-hover:bg-zinc-100/30 w-5 h-5 -right-3 absolute transition-all duration-300"></span>
                            <a href='https://www.linkedin.com'>LN</a>
                        </li>
                       
                    </ul>

                </div>
            </div>

        </div>
    )
}

export default Footer