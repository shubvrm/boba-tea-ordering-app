import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import CartIcon from './CartIcon';
import CartIconPink from './CartIconPink';
import Image from 'next/image';

const Navbar = () => {
  const user= false;
  return (
    <div className='h-12 text-[#EF99AA] p-4 flex items-center justify-between border-b-2 border-b-[#EF99AA] uppercase md:h-24'>
      {/* LEFT LINKS */}
      <div className='hidden md:flex gap-4 flex-1'>
      <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
      {/* LOGO */}
      <div className='text-xl md:font-bold flex-1 md:text-center'>
        {/* <Link href="/">Shinju Brews</Link> */}
        <Image src="/Logo.svg" alt="" height={300} width={300}/>
      </div>
      {/* MOBILE MENU */}
      <div className='md:hidden'>
        <Menu/>
      </div>
      {/* RIGHT LINKS */}
      <div className='hidden md:flex gap-4 items-center justify-end flex-1'>
        <div className='md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-[#fae0e6] px-1 rounded-md'>
          <Image src="/phone.svg" alt="" width={20} height={20}/>
          <span>6261 739 349</span>
        </div>
        {!user? (<Link href="/login">Login</Link>
        ):(
        <Link href="/orders">Menu</Link>
      )}
      <CartIconPink/>
      </div>
    </div>
  )
}

export default Navbar