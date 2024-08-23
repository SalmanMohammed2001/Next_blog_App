
import Link from 'next/link'
import React from 'react'
import Links from './links/Links'

const NavBar = () => {
  return (
    <div>
      <div>
        <Link href={"/"}>Logo</Link>
      </div>
      <div>
        <Links/>

      </div>
    </div>
  )
}

export default NavBar