import React from 'react'
import tech from './tech.avif'

const Experiance = () => {
  return (
    <div className='w-full h-screen bg-[#4731d4]'>
        <div className='w-4/5 h-full m-auto flex'>
            <div className='w-2/5 h-full flex flex-col justify-center'>
                <h1 className='font-extrabold text-7xl text-[#CCF381]'>Over the years,</h1>
                <p className='mt-5 text-gray-50 text-sm leading-relaxed'>I've built products for companies and businesses around the globe ranging from marketing websites to complex solutions and enterprise apps with focus on fast, elegant and accessible user experiences.</p>

                <p className='mt-5 text-gray-50 text-sm leading-relaxed'>Currently, I work at Shopify as a Senior Frontend Engineer crafting thoughtful and inclusive experiences that adhere to web standards for over 3 million merchants across the world.</p>

                <p className='mt-5 text-gray-50 text-sm leading-relaxed'>Before now, I was Principal Frontend Engineer at hellotax, where I worked on a suite of tools and services tailored towards automated VAT compliance for multi-channel sellers in Europe.</p>
                <p className='mt-5 text-gray-50 text-sm leading-relaxed'>
                Prior to hellotax, I was Senior frontend engineering consultant with Pixel2HTML, building JavaScript applications and interfaces for orgs and individuals.
                </p>
                <p className='mt-5 text-gray-50 text-sm leading-relaxed'>
                I once also led the frontend team at Conectar, an e-learning startup through building multiple React applications into a single robust learning platform.
                </p>

            </div>
            <div className='w-3/5 h-full'>
                <img src={tech}/>
            </div>

        </div>
    </div>
  )
}

export default Experiance