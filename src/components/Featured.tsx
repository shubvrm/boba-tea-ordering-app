import React from 'react'
import Image from 'next/image'

const Featured = () => {
  return (
    <div className=''>
      {/* WRAPPER */}
      <div className=''>
        {/* SINGLE ITEMS */}
        <div className=''>
          {/* IMAGE CONTAINER */}
          <div className='relative'>
            <Image src="" alt="" fill/>
          </div>
          {/* TEXT CONTAINER */}
          <div className=''>
            <h1 className=''>Title</h1>
            <p className=''>Desc</p>
            <span>123</span>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured