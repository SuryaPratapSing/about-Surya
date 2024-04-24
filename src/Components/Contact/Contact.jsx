import React, { useState } from 'react';

const Contact = () => {
    const [successMessage, setSuccessMessage] = useState('');
    const [errors, setErrors] = useState({});

    function Submit(e) {
        e.preventDefault();
        const formEle = e.target; // Target the form element
        const formData = new FormData(formEle);

        // Perform validation
        const errors = {};
        if (!formData.get('Name').trim()) {
            errors.name = 'Name is required';
        }
        if (!formData.get('Email').trim()) {
            errors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.get('Email'))) {
            errors.email = 'Invalid email address';
        }

        // Set errors
        setErrors(errors);

        // If no errors, submit the form
        if (Object.keys(errors).length === 0) {
            fetch(
                "https://script.google.com/macros/s/AKfycbyH060j7CkHunQDMmW_troRNTf3AS3KuSH8lxRGJkjdMs7IN_A12-pn1qaOQ5Ffb8tc/exec",
                {
                    method: "POST",
                    body: formData
                }
            ).then(response => {
                if (response.ok) {
                    setSuccessMessage('Successful save');
                    document.body.style.overflow = 'auto';
                    setTimeout(() => {
                        setSuccessMessage('');
                        formEle.reset(); // Reset the form after success
                    }, 1000);
                } else {
                    console.error("Error submitting form:", response);
                    alert("Error submitting form. Please try again later.");
                }
            }).catch(error => {
                console.error("Error submitting form:", error);
                alert("Error submitting form. Please try again later.");
            });
        }
    }

    return (
        <div className='w-full h-auto md:h-screen bg-gray-50 py-16'>
            <div className='text-center'>
                <h1 className='font-extrabold text-3xl md:text-5xl text-[#4731d4]'>Send me a message!</h1>
                <p className='md:text-2xl font-light mt-10'>Got a question or proposal, or just want<br />
                    to say hello? Go ahead.</p>
            </div>
            {successMessage && (
                <div className="bg-green-500 text-white text-center font-semibold px-3 py-2 mt-3 rounded-md">{successMessage}</div>
            )}
            <form className='w-4/5 px-6 md:px-0 md:w-1/2 m-auto mt-10' onSubmit={(e) => Submit(e)}>
                <div className='md:flex gap-5'>
                    <div className='w-full'>
                        <label className='text-gray-400 text-sm'>Your Name <span className='text-red-500'>*</span></label><br />
                        <input className={`bg-gray-50 border-b border-gray-500 w-full h-10 outline-none placeholder-gray-600 place-self-center mt-4 ${errors.name && 'border-red-500'}`} type='text' name='Name' placeholder='Enter your name' />
                        {errors.name && <div className='text-red-500 text-xs mt-1'>{errors.name}</div>}
                    </div>

                    <div className='w-full mt-10 md:mt-0'>
                        <label className='text-gray-400 text-sm'>Email Address <span className='text-red-500'>*</span></label><br />
                        <input className={`bg-gray-50 border-b border-gray-500 w-full h-10 outline-none placeholder-gray-600 place-self-center mt-4 ${errors.email && 'border-red-500'}`} type='email' name='Email' placeholder='Enter your email address' />
                        {errors.email && <div className='text-red-500 text-xs mt-1'>{errors.email}</div>}
                    </div>
                </div>

                <div className='w-full mt-10'>
                    <label className='text-gray-400 text-sm'>Your Message <span className='text-red-500'>*</span></label><br />
                    <textarea cols={8} className='bg-gray-50 border-b border-gray-500 w-full outline-none placeholder-gray-600 place-self-center mt-4' name='Message' placeholder='Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?' />
                </div>

                <div className='w-full flex justify-center mt-10'>
                    <button className='border border-[#4731d4] text-[#4731d4] py-2 md:py-4 px-6 md:px-16 hover:bg-[#4731d4] hover:text-white transition-all duration-300 ease-in-out rounded text-xs md:text-sm font-semibold flex items-center gap-6' type='submit'>SHOOT  <i className="fa-solid fa-arrow-right-long text-xl"></i></button>
                </div>
            </form>
        </div>
    )
}

export default Contact;
