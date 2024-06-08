import Header from './components/Header'
import Sales from './components/Sales'
import Form from './components/Form'
import GPT from './components/gpt'
import Frequent from './components/Frequent'
import Footer from './components/Footer'
// import Sidebar from './components/Sidebar'
// import { useState } from 'react'

const Home = () => {
  return (
    <>
      <div className="w-full h-16 bg-orange-200 text-center content-end pb-2">Join our community. <span className=" font-semibold">Learn more</span> </div>
      <Header />
      <div className=''>
        <Sales />
        <Form />
      </div>
      <div className=''>
        <div className='text-center px-24 my-8'>
          <p className='text-md text-gray-600'>Automate your agent with 5000+ integrations like</p>
        </div>
        <div className='flex items-center justify-center space-x-5'>
          <img src='https://call.toingg.com/images/google-sheets-icon.svg' alt=""/>
          <img src="https://call.toingg.com/images/Calendly.svg" alt="" />
          <img src="https://call.toingg.com/images/HubSpot.svg" alt="" />
          <img src="https://call.toingg.com/images/salesforce.svg" alt="" />
          <img src="https://call.toingg.com/images/slack.svg" alt="" />
        </div>
      </div>

      {/* video sections  */}
      <video className='px-20 mt-16 w-full h-[450px] ' controls autoPlay>
        <source src='https://youtu.be/_La3wQlntgw' type='video/mp4'/>
      </video>

      {/* GPT Sections */}
      <GPT />

      {/* frequent Ask Questions */}
      <Frequent />

      {/* Footer */}
      <Footer />

    </>
  );
}

export default Home
