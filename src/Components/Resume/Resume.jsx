import React from "react";
import html2pdf from "html2pdf.js";
import Linkdln from './Linkdln.png'
import { Link } from "react-router-dom";

const Resume = () => {
    const downloadResume = () => {
        const element = document.getElementById("resume");

        html2pdf(element, {
            margin: 0,
            filename: 'surya_resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { dpi: 192, letterRendering: true },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        });
    };

    return (
        <div className='w-full h-auto bg-gray-100 py-24'>
            <div className='w-4/5 m-auto h-full mt-10 bg-white'>
                <div className="w-full h-fit flex gap-3 justify-end items-center pr-16 pt-10 ">
                    <Link to={'https://www.linkedin.com'}><img className="h-5" src={Linkdln} /></Link>
                    <button
                        onClick={downloadResume}
                        className="font-light rounded flex items-center gap-1 text-xs"
                    >
                        <i class="fa-regular fa-circle-down"></i> Download
                    </button>
                </div>
                <div id="resume" className="p-16  w-full h-full flex">
                    <div className="w-1/3 h-full">
                        <h4 className="text-[#4831D4] font-semibold text-sm border-b-4 border-[#CCF382] w-fit">suryap.netlify.app</h4>
                        <p className="text-gray-600 font-light text-sm mt-1">Rewa, India</p>
                        <h4 className="text-[#4831D4] font-semibold text-sm mt-1">help@suryap.netlify.app</h4>

                        <h5 className="text-[#4831D4] font-semibold text-lg mt-8">Core Technologies:</h5>
                        <ul className="text-zinc-500 text-sm list-disc pl-4 mt-3 leading-loose">
                            <li>React.js</li>
                            <li>JavaScript</li>
                            <li>CSS3</li>
                            <li>HTML5</li>
                            <li>Tailwind css</li>
                            <li>Bootstrap</li>
                            <li>TypeScript (basic)</li>
                            <li>Ruby on Rails</li>
                        </ul>

                        <div className='h-fit relative bottom-0'>
                            <h1 className='font-extrabold text-4xl text-[#4831D4]'><span className=' text-[#4831D4]'>Surya</span>

                            </h1>
                            <div className='font-extrabold text-xl h-3 w-1 bg-[#4831D4] absolute -bottom-1 left-[0.6rem]'>
                            </div>
                            <div className='w-2 h-2 rounded-full bg-[#4831D4] left-[0.46rem] absolute'>
                            </div>
                        </div>

                    </div>

                    <div className="w-2/3 h-full">

                        <h1 className="text-7xl font-bold mb-5 text-[#4831D4]">Surya Pratap <br /> Singh</h1>
                        <p className="text-2xl text-zinc-600 font-light mb-10">Expert Frontend developer</p>
                        <p className="mb-4 text-zinc-500 text-base leading-relaxed">Engineer valued for driving high-performance accessible web <br />experiences. I design quality, user-friendly and scalable products <br /> regardless of stack.</p>
                        <hr className="mt-10 border-[0.05rem] border-gray-400" />

                        <div className="mb-6">
                            <h2 className="text-xl text-[#4831D4] mt-10 font-semibold mb-2">Experience</h2>
                            <p className="mt-5 text-zinc-500 text-base leading-relaxed">I’ve worked on a handful of web projects over the years, some of which <br /> were for the following organizations:</p>
                        </div>

                        <div className="w-full flex items-center justify-between">
                        <h5 className="text-[#4831D4] font-semibold text-lg">Core Technologies <span className="mt-5 text-zinc-500 font-light"> --- Senior Frontend Engineer</span></h5>
                        <p className="text-zinc-500 text-sm">April 2024 - present</p>

                        </div>

                    </div>




                </div>
            </div>
        </div>

    );
};

export default Resume;