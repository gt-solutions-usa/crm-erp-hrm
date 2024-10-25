import React, { useState } from 'react'
import Navbar from './Navbar'
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
const stores = [
  {
    id: 101,
    name: 'Store 1',
    products: [
      {
        id: 1001,
        name: 'Spaghetti',
        price: 500,
        skuCode: 'SPAG1',
        availableQuantity: 20,
        unitPrice: 500,
        discount: 0,
        tax: 17,
        image: 'spaghetti.jpeg'
      },
      {
        id: 1002,
        name: 'Subway Sandwich',
        price: 450,
        skuCode: 'SUB1',
        availableQuantity: 15,
        unitPrice: 450,
        discount: 5,
        tax: 13,
        image: 'subway.jpeg'
      },
      {
        id: 1003,
        name: 'Fish n Chips',
        price: 600,
        skuCode: 'FNC1',
        availableQuantity: 10,
        unitPrice: 600,
        discount: 0,
        tax: 17,
        image: 'fishchips.jpeg'
      },
      {
        id: 1004,
        name: 'Custom Sandwich',
        price: 350,
        skuCode: 'CUS1',
        availableQuantity: 25,
        unitPrice: 350,
        discount: 10,
        tax: 13,
        image: 'sandwich.jpeg'
      },
      {
        id: 1005,
        name: 'Burger',
        price: 300,
        skuCode: 'BUR1',
        availableQuantity: 30,
        unitPrice: 300,
        discount: 0,
        tax: 17,
        image: 'burger.jpeg'
      },
      {
        id: 1006,
        name: 'Pizza',
        price: 800,
        skuCode: 'PIZ1',
        availableQuantity: 12,
        unitPrice: 800,
        discount: 5,
        tax: 13,
        image: 'pizza.jpeg'
      },
      {
        id: 1007,
        name: 'Fried Chicken',
        price: 400,
        skuCode: 'FC1',
        availableQuantity: 18,
        unitPrice: 400,
        discount: 0,
        tax: 17,
        image: 'chicken.jpeg'
      },
      {
        id: 1008,
        name: 'Doner Kebab',
        price: 550,
        skuCode: 'DON1',
        availableQuantity: 15,
        unitPrice: 550,
        discount: 10,
        tax: 13,
        image: 'doner.jpeg'
      },
    ],
  },
  {
    id: 102,
    name: 'Store 2',
    products: [
      {
        id: 1004,
        name: 'Chicken Nuggets',
        price: 5.99,
        skuCode: 'SKU101',
        availableQuantity: 30,
        unitPrice: 5.99,
        discount: 0,
        tax: 5,
        image: 'nuggets.jpeg'
      },
      {
        id: 1005,
        name: 'French Fries',
        price: 12.99,
        skuCode: 'SKU102',
        availableQuantity: 15,
        unitPrice: 12.99,
        discount: 5,
        tax: 5,
        image: 'fries.jpeg'
      },
      {
        id: 1006,
        name: 'Onion Rings',
        price: 20.99,
        skuCode: 'SKU103',
        availableQuantity: 8,
        unitPrice: 20.99,
        discount: 10,
        tax: 5,
        image: 'lasagna.jpeg'
      },
    ],
  },
];

const CustomerView = () => {
  const [currentStore, setCurrentStore] = useState(stores[0])
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    const idx = cart?.findIndex(p => p.id === product.id)

    if (idx === -1) {
      setCart([...cart, {
        ...product,
        quantity: 1
      }]);
    } else {
      const newCart = [...cart]
      newCart[idx].quantity += 1

      setCart(newCart)
    }
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  const updateCartQuantity = (product, quantity) => {
    const idx = cart?.findIndex(p => p.id === product.id);
    if (idx !== -1) {
      const newCart = [...cart];
      newCart[idx].quantity = quantity;
      setCart(newCart);
    }
  };

  const handleStoreChange = (event) => {
    const selectedStoreId = parseInt(event.target.value);
    const selectedStore = stores.find(store => store.id === selectedStoreId);
    setCurrentStore(selectedStore);
  };

  const getTotal = () => {
    return cart.reduce((total, product) => {
      return total + parseFloat(((product.price * product.quantity || product.price) * (1 - product.discount / 100) * (1 + product.tax / 100)).toFixed(3));
    }, 0);
  }

  return (
    <div className='w-screen h-screen'>
      <Navbar />

      <div className='w-full flex h-[calc(100vh-3.5rem)]'>
        <div className='flex-[0.4] h-full'>
          <LeftPanel stores={stores} currentStore={currentStore} addToCart={addToCart} handleStoreChange={handleStoreChange} />
        </div>
        <div className='flex-[0.6] h-full'>
          <RightPanel cart={cart} removeFromCart={removeFromCart} updateCartQuantity={updateCartQuantity} />
        </div>
      </div>

      <div className='absolute bottom-0 h-20  w-full left-0 px-2 bg-white'>
        <div className='w-full h-full border-t border-b border-t-gray-400 border-b-gray-400 flex items-center justify-between pl-4 text-lg'>
          <span>

            Net Total: {getTotal()}
          </span>
          <button className='text-sm py-[6px] px-[12px] rounded-lg bg-blue-500 text-white'>Continue Sale</button>
        </div>
      </div>

    </div>
  )
}

export default CustomerView

