'use client';

import React, {useState} from 'react'
import Sidebar from './Sidebar'


const Header: React.FC = () => {
  const [shubh, setShubh] = useState(true);

  const changeIt = () => {
    setShubh(!shubh);
  }
  return (
    <>
      <div className='w-full h-16 flex '>
        <div className='content-center pl-4 font-bold'>
          <a href="/">Toingg</a>
        </div>
        <button onClick={changeIt} className='ml-auto space-y-1 content-center pr-4'>
            <div className='w-7 h-[3px] bg-orange-400 rounded-2xl'></div>
            <div className='w-7 h-[3px] bg-orange-400 rounded-2xl'></div>
            <div className='w-7 h-[3px] bg-orange-400 rounded-2xl'></div>
        </button>
        
      </div>
      
      <Sidebar isOpen={shubh} changeIt={changeIt} />
    </>
  )
}

export default Header