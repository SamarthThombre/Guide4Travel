import React from 'react'

function Home() {
  return (  
    <div>
      <div className='flex w-full absolute top-1/4 items-center justify-between p-5'>
          <div className='flex flex-col items-center gap-8 '>
            <p className='text-white rotate-90'>Follow us </p>
            <div>
              <img src="src/assets/insta-logo.svg" className='w-6' alt="instagram logo" />
              <img src="src/assets/tweeter.svg" alt="tweeter logo" className='w-6' />
            </div>  
          </div>
          <div className='text-white w-3/5'>
              <p className='text-[#FBD784]'>---- Hinking Guide</p>
              <h1 className='p-4 text-5xl md:text-7xl  '>Be prepared for the Mountains and beyond!</h1>
              <h1>Scroll down ↓</h1>
          </div>
          <div className='flex flex-col items-end text-white'>
              <span>Start</span>
              <span>01</span> 
              <span>02</span>
              <span>03</span>
          </div>          
      </div>
      <div className='relative  '> 
        <div className='bg-gradient-to-t from-[#0B1D26] w-full h-28 absolute -top-28'> </div>
        <div className='flex md:w-4/5 w-11/12 items-center m-auto p-6 text-white gap-5 relative '>
          <div className='absolute top-32 -left-6'>
            <p className='text-9xl opacity-10	font-bold'>01</p>
          </div>
          <div>
            <p className='font-semibold text-4xl md:text-8xl p-4'>What level of  hiker are you?</p>
            <p className='text-sm md:text-2xl p-4'>Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? </p>
          </div>  
          <img className='xl:w-[600px] md:w-[300px] ' src="src/assets/01.png" alt="image" />
        </div>

        <div className='flex md:w-4/5 w-11/12 items-center mx-auto p-6 text-white gap-5 my-20 relative '>
          <img className='xl:w-[600px] md:w-[300px] ' src="src/assets/a.png" alt="image" />
          <div className='relative'>
          <div className='absolute -top-12 '>
            <p className='text-9xl opacity-10	font-bold'>02</p>
          </div>
          <div>
            <p className='font-semibold text-4xl md:text-8xl p-4'>Picking the right Hiking Gear!</p>
            <p className='text-sm md:text-2xl p-4'>The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have.
            Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet. </p>
          </div>
          </div>  
          
        </div>

        <div className='flex md:w-4/5 w-11/12 items-center m-auto p-6 text-white gap-5 relative '>
          <div className='absolute top-32 -left-6'>
            <p className='text-9xl opacity-10	font-bold'>03</p>
          </div>
          <div>
            <p className='font-semibold text-4xl md:text-8xl p-4'>Understand Your Map & Timing</p>
            <p className='text-sm md:text-2xl p-4'>To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction.. </p>
          </div>  
          <img className='xl:w-[600px] md:w-[300px] ' src="src/assets/01(1).png" alt="image" />
        </div>
                                        
      </div>
    </div>
  )
}

export default Home