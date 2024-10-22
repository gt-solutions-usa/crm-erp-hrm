import React, { useState } from 'react'
import bg from './loadingBg.jpeg'
import { Link } from 'react-router-dom'


const LoadingPage = () => {
  const [step, setStep] = useState(true)

  if (!step) {
    return (
      <div className="w-screen h-screen relative">
        <img src={bg} className='absolute w-full h-full -z-1 object-cover' alt="" />
        <div className='relative z-10 w-full h-full flex justify-center items-center'>
          <div className='flex flex-col items-center'>
            <h2 className='text-5xl font-extrabold text-white'>Welcome to Genie Brain</h2>
            <p className='text-xl font-extrabold text-white mb-14 mt-2'>AI powered ERP, HRM, CRM & POS</p>
            <div className='flex gap-4'>
              <button className='py-2 px-5 text-black bg-lime-400 rounded-xl text-base cursor-pointer hover:text-black' onClick={() => setStep(true)}>Admin Login</button>
              <Link className='py-2 px-5 text-black bg-lime-400 rounded-xl text-base cursor-pointer hover:text-black' to='/customer'>Customer Login</Link>
            </div>
          </div>
        </div>
    </div>
    )
  }

  return (
    <div className='bg-black w-screen h-screen'>
      Genie Brain
    </div>
  )
}

export default LoadingPage
