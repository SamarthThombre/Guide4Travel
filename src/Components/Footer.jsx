import React from 'react'

function Footer() {
  return (
    <div className='flex text-white p-6 mx-auto my-8 justify-between w-4/5 md:w-11/12'>
      <div className='flex flex-col text-white justify-between'>
        <div className='flex flex-col text-white gap-3 w-3/5 font-semibold'>
          <img src="src/assets/Logo.svg" className='w-20' alt="logo" />
          <p>Get out there & discover your next slope, mountain & destination!</p>
        </div>
        <div>
          <p>Copyright 2023 MNTN, Inc. Terms & Privacy</p>
        </div>
      </div>
      <div className='flex flex-col text-white gap-1'>
        <a href="">About MNTN</a>
        <a href="">Contributors & Wrriters</a>
        <a href="">Write For Us </a>
        <a href="">Contact Us</a>
        <a href="">Privacy  Policy</a>
      </div>
      <div className='flex flex-col text-white gap-1'>
        <a href="">The Team</a>
        <a href="">Jobs</a>
        <a href="">Press</a>
      </div>
    </div>
  )
}

export default Footer