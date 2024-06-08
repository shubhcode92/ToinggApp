import React from 'react'

const Form = () => {
  return (
    <>
      <div className='mx-20 my-40 h-[500px] rounded-2xl shadow-lg bg-gradient-to-t from-orange-50 to-orange-200 '>
        <form action="">
          <div className=' px-5 pt-20'>
            <h1 className='font-bold text-2xl'>Try now</h1>
            <span className='text-slate-400'>Get a call from Toingg</span>
          </div>
          <div className='px-5'>
            <input type="text" placeholder='Name' className=' my-3 w-full px-3 py-2 rounded-xl bg-transparent border-2 border-gray-500'/>

            <div className=' my-3 flex w-full rounded-xl border-2 border-gray-500'>
              <select className='bg-transparent' >
                <option value="india">IND</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
                <option value="aus">AUS</option>
              </select>    
              <input type="text" placeholder='+91' className='px-2 py-2 rounded-md bg-transparent' />
            </div>

            <select className=' my-3 w-full bg-transparent border-2 border-gray-500 rounded-xl px-6 py-2' >
              <option value="india">Choose your language</option>
              <option value="hindi">Hindi</option>
              <option value="english">English</option>
              <option value="french">French</option>
              <option value="japanies">Japanies</option>
            </select>               
            
          </div>

          <div className=' my-3 text-center mt-16'>
            <button className='rounded-full py-3 text-white bg-orange-400 '><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="55" height="30" viewBox="0 0 50 50">
<path d="M 14 3.9902344 C 8.4886661 3.9902344 4 8.4789008 4 13.990234 L 4 35.990234 C 4 41.501568 8.4886661 45.990234 14 45.990234 L 36 45.990234 C 41.511334 45.990234 46 41.501568 46 35.990234 L 46 13.990234 C 46 8.4789008 41.511334 3.9902344 36 3.9902344 L 14 3.9902344 z M 18.005859 12.033203 C 18.633859 12.060203 19.210594 12.414031 19.558594 12.957031 C 19.954594 13.575031 20.569141 14.534156 21.369141 15.785156 C 22.099141 16.926156 22.150047 18.399844 21.498047 19.589844 L 20.033203 21.673828 C 19.637203 22.237828 19.558219 22.959703 19.824219 23.595703 C 20.238219 24.585703 21.040797 26.107203 22.466797 27.533203 C 23.892797 28.959203 25.414297 29.761781 26.404297 30.175781 C 27.040297 30.441781 27.762172 30.362797 28.326172 29.966797 L 30.410156 28.501953 C 31.600156 27.849953 33.073844 27.901859 34.214844 28.630859 C 35.465844 29.430859 36.424969 30.045406 37.042969 30.441406 C 37.585969 30.789406 37.939797 31.366141 37.966797 31.994141 C 38.120797 35.558141 35.359641 37.001953 34.556641 37.001953 C 34.000641 37.001953 27.316344 37.761656 19.777344 30.222656 C 12.238344 22.683656 12.998047 15.999359 12.998047 15.443359 C 12.998047 14.640359 14.441859 11.879203 18.005859 12.033203 z"></path>
</svg></button>
          </div>

          
        </form>
      </div>
    </>
  )
}

export default Form