import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { Scan, UserRound } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-14 flex items-center justify-between px-4 bg-gray-300'>
      <div className='flex items-center gap-3'>
        <ArrowLeftOutlined />
        <ArrowRightOutlined />
        <span>admin / pos</span>
      </div>
      <div className='flex items-center gap-3'>
        <button className='py-[6px] px-[10px] rounded-lg bg-pink-300 text-white'>Dashboard</button>
        <div className='pt-2'>
          <Scan size={22} />
        </div>
        <div className='pt-2'>
          <UserRound size={22} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
