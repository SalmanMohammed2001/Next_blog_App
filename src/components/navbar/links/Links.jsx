import Link from 'next/link'
import React from 'react'
import NavLink from './navLink/navLink'

const Links = () => {

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

  return (

    <div className={'flex items-center gap-[30px]'}>
          {
       link.map((link)=>{
        return <NavLink item={link} />
    })
  }
    </div>
  )
}

export default Links