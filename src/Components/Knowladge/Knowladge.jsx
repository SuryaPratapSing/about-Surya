import React from 'react'
import dot from './dot.png'
import zig from './zigzaj.png'

const Knowladge = () => {
  return (
    <div className='w-full h-auto md:h-screen bg-white flex flex-col'>
      <div className='w-4/5 m-auto h-fit py-16 md:py-0 pl-8 md:pl-0'>
        <div className='w-full md:w-11/12 h-fit flex justify-between'>
          <div className='w-full md:w-2/5 relative'>
            <img className='h-32 hidden md:block absolute z-10 -top-12 left-32 opacity-20' src={dot} />
            <h1 className='font-extrabold text-3xl md:text-7xl text-[#4731d4] z-20 relative'>Design</h1>
            <p className='mt-5 text-[#3D155F] text-sm leading-relaxed z-20 relative'>I'm probably not the typical designer positioned behind an Illustrator artboard adjusting pixels, but I design. Immersed in stylesheets tweaking font sizes and contemplating layouts is where you'll find me (~_^). I'm committed to creating fluent user experiences while staying fashionable.</p>

          </div>
          <div className='hidden w-96 h-5 md:flex justify-between'>

            <div className='flex gap-2'>
              <div className='h-3 w-3 border border-[#4731d4] rounded-full'></div>
              <div className='h-3 w-3 border border-[#4731d4] rounded-full'></div>
              <div className='h-3 w-3 border border-[#4731d4] rounded-full'></div>
              <div className='h-3 w-3 border border-[#4731d4] rounded-full'></div>
              <div className='h-3 w-3 border border-[#4731d4] rounded-full'></div>
            </div>
            <img className='h-32' src={dot} />

          </div>
        </div>
        <div className='w-full h-fit mt-5 flex justify-between'>
          <div className='w-96 h-fit hidden md:flex flex-col items-center mt-20'>

            <div className='flex gap-2 h-full items-center'>
              <div className='h-3 w-3 border border-[#4731d4] rounded-full'></div>
              <div className='h-3 w-3 border border-[#4731d4] rounded-full'></div>
              <div className='h-3 w-3 border border-[#4731d4] rounded-full'></div>
              <div className='h-3 w-3 border border-[#4731d4] rounded-full'></div>
              <div className='h-3 w-3 border border-[#4731d4] rounded-full'></div>
            </div>
            <img className='h-20 ml-52 mt-24' src={zig} />


          </div>
          <div className='w-full md:w-2/5 h-fit'>
            <h1 className='font-extrabold text-3xl md:text-7xl text-[#4731d4]'>Engineering</h1>
            <p className='mt-5 text-[#3D155F] text-sm leading-relaxed '>In building JavaScript applications, I'm equipped with just the right tools, and can absolutely function independently of them to deliver fast, resilient solutions optimized for scale — performance and scalabilty are priorities on my radar.</p>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Knowladge