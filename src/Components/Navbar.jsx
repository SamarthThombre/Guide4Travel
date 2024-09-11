import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className="w-full flex justify-between p-5 absolute top-0">
        <div>
          <img src="src/assets/Logo.svg" alt="logo" />
        </div>
        <div className=' '>
          <ul className='flex gap-9 text-white'>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Blog</a></li>
          </ul>
        </div>
        <div className='text-white' >
          <button className='flex gap-2'><img className='w-4' src="src/assets/account.svg" alt="user logo" />Account</button>
        </div>
      </nav>
    </div>  
  )
}

export default Navbar