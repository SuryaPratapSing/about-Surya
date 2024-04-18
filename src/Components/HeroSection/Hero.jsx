import React from 'react'
import handsome from './Assets/Handsome:hero.jpg'
import handsomb from './Assets/handsome.jpeg'
import zig from '../Knowladge/zigzaj.png'


const Hero = () => {
    return (
        <div className='w-full h-auto md:h-screen bg-white'>
            <div className='md:flex h-full md:h-[85vh]'>
                <div className='w-full h-full md:w-2/3 bg-[#4731d4] pl-8 md:pl-12 lg:pl-32 pb-20 flex items-center relative justify-center md:justify-normal pt-32 md:pt-0'>
                    <div className='w-4/5 md:h-4/6 md:w-3/5'>
                        <h1 className='font-extrabold text-4xl md:text6xl lg:text-7xl text-[#ccf382] mt-4 md:mt-36'>Frontend Developer.</h1>
                        <p className='text-lg md:text-xl text-gray-50 mt-2 md:mt-5'>I like to craft solid and scalable frontend products with great user experiences.</p>

                        <div className='text-[#CCF381] flex text-sm gap-6 md:gap-16 mt-6 md:mt-20 opacity-90'>
                            <p>Highly skilled at progressive enhancement, design systems & UI Engineering.</p>
                            <p>Proven experience building successful products for clients across several countries.</p>
                        </div>
                    </div>
                    <img className='h-20 absolute bottom-3 right-72 md:right-44 md:bottom-32 filter invert' src={zig} />

                    <img className='hidden md:block h-52 md:h-72 lg:h-80 w-auto object-cover absolute md:-right-[11.25rem]  lg:-right-[12.5rem] top-0 md:top-[50%] transform -translate-y-1/2 z-20' src={handsome} alt="Handsome guy" />
                </div>
                <div className='w-full md:w-1/3 h-auto md:h-full bg-[#ccf382] flex justify-center items-center py-20 relative'>
                    <img className='md:hidden h-52 w-auto object-cover' src={handsomb} alt="Handsome guy" />
                    <img className='h-20 absolute right-10 top-5 md:right-44 md:top-36 filter invert' src={zig} />

                </div>
            </div>
        </div>

    )
}

export default Hero