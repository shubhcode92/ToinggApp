import React, {useState} from 'react'

interface sideProps {
    isOpen : boolean;
    changeIt : () => void;
}
const Sidebar: React.FC<sideProps> = ({isOpen, changeIt}) => {
  return (
    <>
        <div className={` h-[70vh] px-10 mx-14 rounded-xl bg-gradient-to-t from-orange-300 ${isOpen ? 'hidden' : 'block'}`}>
            <ul className='space-y-12 pt-12'>
                <div className=''>
                    <li><a href="#">Contact</a></li>
                    <div className='ml-auto h-0 w-10 border border-black'></div>
                </div>
                <div>
                    <li><a href="#">Pricing</a></li>
                    <div className='ml-auto h-0 w-10 border border-black'></div>
                </div>
                <div>
                    <li><a href="#">Documentation</a></li>
                    <div className='ml-auto h-0 w-10 border border-black'></div>
                </div>
                <div>
                    <li><a href="#">Join our community</a></li>
                    <div className='ml-auto h-0 w-10 border border-black'></div>
                </div>
            </ul>
        </div>
    </>
  )
}

export default Sidebar