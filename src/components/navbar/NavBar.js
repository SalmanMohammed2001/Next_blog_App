
import Link from 'next/link'
import React from 'react'
import Links from './links/Links'
import style from '@/components/navbar/navbar.module.css'

const NavBar = () => {
  return (
    <div className={style.container}>
      <div >
        <Link href={"/"} className='text-2xl font-bold'>Logo</Link>
      </div>
      <div>
        <Links/>

      </div>
    </div>
  )
}

export default NavBar