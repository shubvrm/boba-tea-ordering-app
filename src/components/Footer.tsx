import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='h-12 md:h-24 px-4 lg:p-20 xl:px-40 text-[#EF99AA] flex items-center justify-between'>
      <Link href="/" className='font-bold text-xl'>
      <Image src="/Logo.svg" alt="" height={300} width={300}/>
      </Link>
      <p> ALL RIGHTS RESERVED ©</p>
    </div>
  )
}

export default Footer