import React from 'react'

const Frequent = () => {
  return (
    <>
        <div className=''>
            <div className='font-semibold text-4xl px-20 pb-16'>Frequently asked questions</div>
            <div>
                <ul className='px-20'>
                    <div className='pt-6 flex'>
                        <li>What is Toingg's pricing?</li>
                        <button className='ml-auto'>+</button>
                    </div>
                    <div className='w-full h-[1px] bg-slate-200 border border-slate-300 mt-1'></div>
                    <div className='pt-6 flex '>
                        <li>What is Toingg?</li>
                        <button className='ml-auto'>+</button>
                    </div>
                    <div className='w-full h-[1px] bg-slate-200 border border-slate-300 mt-1'></div>
                    <div className='pt-6 flex '>
                        <li>How secure is Toingg?</li>
                        <button className='ml-auto'>+</button>
                    </div>
                    <div className='w-full h-[1px] bg-slate-200 border border-slate-300 mt-1'></div>
                    <div className='pt-6 flex '>
                        <li>What phone number can I use with Toingg?</li>
                        <button className='ml-auto'>+</button>
                    </div>
                    <div className='w-full h-[1px] bg-slate-200 border border-slate-300 mt-1'></div>
                    <div className='pt-6 flex '>
                        <li>How does billing work?</li>
                        <button className='ml-auto'>+</button>
                    </div>
                    <div className='w-full h-[1px] bg-slate-200 border border-slate-300 mt-1'></div>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Frequent