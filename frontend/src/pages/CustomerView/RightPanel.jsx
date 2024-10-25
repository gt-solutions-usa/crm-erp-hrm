import { CirclePlus } from 'lucide-react'
import React, { useState } from 'react'

const RightPanel = ({ cart, removeFromCart, updateCartQuantity }) => {
  return (
    <div className='w-full h-full px-2'>
      <div className='w-full flex justify-between py-4'>
        <div className='w-[48%] flex flex-col gap-2'>
          <span className='text-red-500 font-extralight'>* Customer</span>
          <select name="" className='px-3 w-full py-[5px] rounded-lg' id="">
            <option value="">Walk-in Customer</option>
            <option value="">Drive through Customer</option>
          </select>
        </div>
        <div className='w-[48%] flex flex-col gap-2'>
          <span className='text-red-500 font-extralight'>* Date</span>
          <input type="date" className='px-3 w-full py-[5px] rounded-lg' defaultValue={new Date().toISOString().slice(0, 10)} />
        </div>
      </div>

      <div className='py-4'>
        <div className='w-full flex justify-between rounded-md bg-blue-100 py-[5px] pl-2'>
          <div className='flex-[0.04]'>SL</div>
          <div className='flex-[0.17]'>Product</div>
          <div className='flex-[0.15]'>Quantity</div>
          <div className='flex-[0.17]'>Price</div>
          <div className='flex-[0.14]'>Discount</div>
          <div className='flex-[0.11]'>Amount</div>
          <div className='flex-[0.1]'>Tax%</div>
          <div className='flex-[0.05]'></div>
        </div>


        <div className='flex flex-col gap-2'>
          {cart.map((product, index) => (
            <div className={`w-full flex justify-between py-[5px] pl-2 ${index<cart?.length-1 && 'pb-5 border-b border-b-gray-300'}`}>
              <div className='flex-[0.04]'>
                {index + 1}
              </div>
              <div className='flex-[0.17]'>
                <input type="text" className='px-3 w-full py-[5px] rounded-lg bg-gray-100' disabled value={product.name} />
                <span className='text-[11px] text-gray-700 pl-2 pt-1'>UoM: 1/pc</span>
              </div>
              <div className='flex-[0.15]'>
                <input type="number" className='px-3 w-full py-[5px] rounded-lg bg-gray-100' value={product.quantity} onChange={(e) => updateCartQuantity(product, parseInt(e.target.value))} />
                <span className='text-[11px] text-gray-700 pl-2 pt-1'>Stock: {product.availableQuantity}</span>
              </div>
              <div className='flex-[0.17]'>
                <input type="text" className='px-3 w-full py-[5px] rounded-lg bg-gray-100' disabled value={product.price} />
              </div>
              <div className='flex-[0.14]'>
                <input type="text" className='px-3 w-full py-[5px] rounded-lg bg-gray-100' disabled value={`${product.discount}%`} />
              </div>
              <div className='flex-[0.11]'>{((product.price * product.quantity || product.price) * (1 - product.discount / 100) * (1 + product.tax / 100)).toFixed(2)}
              </div>
              <div className='flex-[0.1]'>
                <input type="text" className='px-3 w-full py-[5px] rounded-lg bg-gray-100' disabled value={product.tax} />
                <span className='text-[11px] text-gray-700 pl-2 pt-1'>Total: {(product.price*product.quantity) * 17/100}</span>
              </div>
              <div className='flex-[0.05] flex items-center justify-center'>
                <CirclePlus size={20} className='rotate-45 cursor-pointer' onClick={() => removeFromCart(product)} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RightPanel
