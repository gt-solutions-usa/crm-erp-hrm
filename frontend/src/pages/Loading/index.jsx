import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import bg from './loadingBg.jpeg'
import logo from './logo.png'


const LoadingPage = () => {
  const [step, setStep] = useState(false)

  if (!step) {
    return (
      <div className="w-screen h-screen relative">
        <img src={bg} className='absolute w-full h-full -z-1 object-cover' alt="" />
        <div className='relative z-10 w-full h-full flex justify-center items-center'>
          <div className='flex flex-col items-center'>
            <img src={logo} className='w-[65rem]' alt="" />
            <div className='flex flex-col items-center relative -top-[200px]'>
              <h2 className='text-5xl font-extrabold text-white'>Welcome to Genie Brain</h2>
              <p className='text-xl font-extrabold text-white mb-14 mt-2'>AI powered ERP, HRM, CRM & POS</p>
              <div className='flex gap-4'>
                <button className='py-2 px-5 text-black bg-lime-400 rounded-xl text-base cursor-pointer hover:text-black' onClick={() => setStep(true)}>Admin Login</button>
                <Link className='py-2 px-5 text-black bg-lime-400 rounded-xl text-base cursor-pointer hover:text-black' to='/customer'>Customer Login</Link>
              </div>
            </div>
          </div>
        </div>
    </div>
    )
  }

  return (
    <div className='bg-black w-screen h-screen flex items-center justify-center'>
      <img src="" className='absolute top-10 left-10' alt="" />
      <div className='flex gap-16'>
        <div className='w-[10rem] h-[7rem] bg-sky-400 rounded-md flex items-center justify-center'>
          <Link to='/erp' className='w-[9.25rem] h-[6.25rem] hover:text-white bg-purple-950 flex items-center justify-center text-white text-2xl font-bold'>
              ERP
          </Link>
        </div>
        <div className='w-[10rem] h-[7rem] bg-sky-400 rounded-md flex items-center justify-center'>
          <Link to='/crm' className='w-[9.25rem] h-[6.25rem] hover:text-white bg-purple-950 flex items-center justify-center text-white text-2xl font-bold'>
              CRM
          </Link>
        </div>
        <div className='w-[10rem] h-[7rem] bg-sky-400 rounded-md flex items-center justify-center'>
          <Link to='/hrm' className='w-[9.25rem] h-[6.25rem] hover:text-white bg-purple-950 flex items-center justify-center text-white text-2xl font-bold'>
              HRM
          </Link>
        </div>
        <div className='w-[10rem] h-[7rem] bg-sky-400 rounded-md flex items-center justify-center'>
          <Link to='/pos' className='w-[9.25rem] h-[6.25rem] hover:text-white bg-purple-950 flex items-center justify-center text-white text-2xl font-bold'>
              POS
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LoadingPage
