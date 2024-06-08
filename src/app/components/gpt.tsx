import React from 'react'

const gpt = () => {
  return (
    <>
        <div>
            <div className='mx-20 my-40 h-[690px] rounded-2xl shadow-lg bg-orange-50'>
                <video className='w-full h-[220px] rounded-xl px-12' controls autoPlay>
                    <source src='https://call.toingg.com/videos/Untitled%20design%20(1).mp4' type='video/mp4' />
                </video>
                <div className=' text-center font-medium text-2xl'>
                    <p>Explore TOINGG <br /> in <span className=' text-orange-600'>GPT</span> Store</p>
                </div>
                <div className='px-8 pt-4'>
                    <ul className='list-disc  font-normal'>
                        <li>Interactive Communication: Engage in single or batch calls using TOINGG GPT.</li>
                        <li>Advanced Features: Leverage GPT for real-time sentiment analysis during calls.</li>
                        <li>Data Export: Conveniently export call logs to CSV.</li>
                        <li>Enhanced Usability: Tailored for users familiar with CSV functionalities.</li>
                    </ul>
                </div>
                <div className=' my-3 text-center mt-16'>
                    <button className='rounded-md px-2 py-2 text-white bg-orange-500 '>Explore more</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default gpt