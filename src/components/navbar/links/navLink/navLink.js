"use client"
import Link from 'next/link'
import React from 'react'
import style from './navLink.module.css'
import { usePathname } from 'next/navigation'
const NavLink = ({item}) => {

    const pathName=usePathname();


  return (
    <Link className={`${style.container} ${pathName ==item.path && style.active}`} href={item.path}>{item.title}</Link>
  )
}

export default NavLink