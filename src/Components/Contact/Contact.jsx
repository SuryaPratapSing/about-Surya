import React from 'react'
const Contact = () => {
    return (
        <div className='w-full h-screen bg-gray-50 py-16'>
            <div className='text-center'>
                <h1 className='font-extrabold text-5xl text-[#4731d4]'>Send me a message!</h1>
                <p className='text-2xl font-light mt-10'>Got a question or proposal, or just want<br />
                    to say hello? Go ahead.</p>
            </div>

            <form className='w-1/2 m-auto mt-10'>
                <div className='flex gap-5'>
                    <div className='w-full'>
                        <label className='text-gray-400 text-sm'>Your Name</label><br />
                        <input className='bg-gray-50 border-b border-gray-500 w-full h-10 outline-none placeholder-gray-600 place-self-center mt-4' type='text' placeholder='Enter your name' />
                    </div>

                    <div className='w-full'>
                        <label className='text-gray-400 text-sm'>Email Address</label><br />
                        <input className='bg-gray-50 border-b border-gray-500 w-full h-10 outline-none placeholder-gray-600 place-self-center mt-4' type='text' placeholder='Enter your email address' />
                    </div>
                </div>

                <div className='w-full mt-10'>
                    <label className='text-gray-400 text-sm'>Your Message</label><br />
                    <textarea cols={8} className='bg-gray-50 border-b border-gray-500 w-full outline-none placeholder-gray-600 place-self-center mt-4' type='text' placeholder='Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?' />


                </div>

                <div className='w-full flex justify-center mt-10'>
                    <button className='border border-[#4731d4] text-[#4731d4] py-4 px-16 hover:bg-[#4731d4] hover:text-white transition-all duration-300 ease-in-out rounded text-sm font-semibold flex items-center gap-6'>SHOOT  <i class="fa-solid fa-arrow-right-long text-xl"></i>
                    


                    </button>
                </div>
            </form>
        </div>
    )
}

export default Contact