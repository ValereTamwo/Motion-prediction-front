import React from 'react'
import Login from './Login'
import logo from '../../public/icons/logo.png'
function Header() {
  return (
      <header classname='w-screen h-[100px] bg-red-300 borber-b-2'>
          <div className='w-1/2'> 
               <div className='h-100 flex  top-0 left-0 mr-9 mt-5 ml-9'>
                    <div className='flex ml-3 justify-center items-center'>
                        <img className='rounded-full w-[50px] h-[50px]' src={logo} alt='logo' />
                    </div>
                    <div className='flex ml-2 justify-center items-center'>
                        <h3 className='text-black text-[20px] text-center font-bold'>Motion </h3>
                    </div>
                </div>
          </div>
          <div className='w-1/2'>
              <Login />
          </div>
    </header>
  )
}

export default Header