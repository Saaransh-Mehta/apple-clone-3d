import React from 'react'
import { appleImg, bagImg, searchImg } from '../utils'
import { navLists } from '../constants'

function Navbar() {
  return (
    <header className='w-full p-5 sm:px-10 px-5flex justify-between items-center'>
        <nav className='flex justify-between w-full '>
            <img src={appleImg} height={20} width={20} />
            <div className='flex flex-1 justify-center max-sm:hidden gap-5' >
                {navLists.map((nav)=>(
                    <div key={nav} className='cursor-pointer text-sm text-gray hover:text-white transition-all'>
                        {nav}
                        </div>
                ))}
            </div>
            <div className='flex gap-8 items-baseline max-sm:justify-end  max-sm:flex-1'>
                <img className='cursor-pointer' src={searchImg} alt="search" width={18} height={18}/>
                <img className='cursor-pointer' src={bagImg} alt="bag" width={18} height={18}/>

            </div>
        </nav>
    </header>
  )
}

export default Navbar