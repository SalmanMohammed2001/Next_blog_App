import Link from 'next/link'
import React from 'react'

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

    <div>
          {
    link.map((link)=>{
        return <Link href={link.path}>{link.title}</Link>
    })
  }
    </div>
  )
}

export default Links