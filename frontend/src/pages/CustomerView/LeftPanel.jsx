import React from 'react'

const LeftPanel = ({ stores, currentStore, addToCart, handleStoreChange }) => {
  return (
    <div className='w-full bg-gray-200 h-full'>
      <div className='w-full h-20 flex items-center justify-around'>
        <input type="text" className='px-3 py-[7px] rounded-lg text-xs min-w-[52%]' placeholder='Search Product' />
        <select name="store" className='px-2 py-[5px] rounded-lg min-w-[38%]' id="store-select" onChange={handleStoreChange}>
          {stores.map((store, index) => (
            <option key={index} value={store.id} selected={currentStore.id === store.id}>
              {store.name}
            </option>
          ))}
        </select>
      </div>

      <div className='w-full cursor-pointer px-0 md:px-6 lg:px-1 gap-1 grid grid-cols-1 lg:grid-cols-2 overflow-y-scroll'>
        {currentStore.products.map((product) => (
          <div className='w-full mb-1 shadow-md min-w-[230px] max-w-[340px] bg-white relative flex items-center justify-center h-36 rounded-md' onClick={() => addToCart(product)} key={product.id}>
            <div className='absolute top-0 left-0 h-6 w-14 bg-purple-600 text-white rounded-ss-md flex items-center justify-center text-xs'>
              QTY: {product.availableQuantity}
            </div>

            <div className="flex gap-2 items-center">
              <div className='w-20'>
                <img src={product.image} alt="" />
              </div>
              <div>
                <p className='font-bold'>{product.name}</p>
                <p className='text-[10px] font-extralight'>Price: {product.unitPrice}</p>
                <p className='text-[10px] font-extralight'>SKU: {product.skuCode}</p>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default LeftPanel
