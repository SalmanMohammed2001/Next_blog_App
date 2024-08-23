"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './navLink/navLink'
import style from './links.module.css'

const Links = () => {

    const[open,setOpen]=useState(false);



    const link =[
        {
            title:"HomePage",
            path:"/"

        }, {
            title:"About",
            path:"/about"

        },
        {
            title:"Contact",
            path:"/contact"

        },
        {
            title:"Blog",
            path:"/blog"

        }
    ]

     //Tampory
     const session=true;
     const isAdmin=true;

  return (
<div className={`flex items-center gap-[10px] text-sm  ${style.container}`}>
    <div className={`flex items-center gap-[10px] text-sm ${style.links}`}>
          {
       link.map((link)=>{
        return <NavLink item={link} key={link.title}/>
    })
  }
  {

    session ? (
    
        <>
    {isAdmin &&   <NavLink item={{title:"Admin",path:"/admin"}}/>}
             <button className='p-[10px] cursor-pointer font-bold bg-white text-[#0d0c22]'>Logout</button>

             </>
     ) :
    (
    <NavLink item={{title:"Login",path:"/login"}}/>
    )

  }
    </div>

  <button className={style.menuMutton} onClick={()=>setOpen((pre)=>!pre)}>Menu</button>
  {
    open &&  <div className={`${style.mobileLinks}`}>
        
        {
       link.map((link)=>{
        return <NavLink item={link} key={link.title}/>
    })
  }
    </div>
  }


    </div>
  );
};

export default Links