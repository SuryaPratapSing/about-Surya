import React from 'react'
import pragati from './logo.png'
const Work = () => {
  const Data = [
    {
      id: 1,
      image: 'https://quicksolver.in/static/media/company_logo.756889fcca3c7fd0ba99.png',
      name: 'QuickSolver',
      link: 'quicksolver.in',
      href: 'https://quicksolver.in',

    },
    {
      id: 2,
      image: 'https://quicksolver.in/static/media/company_logo.756889fcca3c7fd0ba99.png',
      name: 'ChiNik',
      link: 'diyugroup.com',
      href: 'https:/diyugroup.com',

    }
    ,
    {
      id: 3,
      image: 'https://www.thesociety24.com/static/media/nav-logo.87b5d2eb112577ca59df.png',
      name: 'TheSociety24',
      link: 'thesociety24.com',
      href: 'https://www.thesociety24.com/',

    },
    {
      id: 4,
      image: pragati,
      name: 'PRAGATI',
      link: 'pragati.com',
      href: '',

    },
    {
      id: 5,
      image: 'http://159.89.165.218/assets/logo-1d131a8c2afcd3f6baa80ffb2052d44aa99a1bcab3a6e61342f22af98f635a0c.png',
      name: 'Token Management',
      link: 'tokenmanagement.in',
      href: 'http://159.89.165.218/',

    }
  ]
  return (
    <div className='w-full h-auto bg-gray-100 py-32'>
      <div className='w-4/5 m-auto h-full mt-32'>
        <h2 className='text-4xl font-semibold text-gray-600 text-center'><span className='text-gray-500'>/</span>work<span className='text-gray-500'>.</span></h2>
        <p className='text-center text-lg mt-5 font-light'>Selected work I've taken on in the past.</p>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-10'>
        {Data.map((value) => (
          <div className='w-full h-72 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]'>
            <div className='w-full h-[12rem] flex justify-center items-center '>
              <img className='w-32' src={value.image}/>
            </div>
            <div className='w-full h-[6rem] bg-white flex flex-col justify-center pl-8'>
            <p className='font-semibold'>{value.name}</p>
            <a className='text-blue-600 text-xs' href={value.href}>{value.link}</a>

            </div>

          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work