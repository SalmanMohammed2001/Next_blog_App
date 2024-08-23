import React from 'react'
import style from './contact.module.css'
import Image from 'next/image'

const Contactpage = () => {
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <Image src="/contact.png"  alt=""   fill/>
      </div>
      <div className={style.formContainer}>
        <form className={style.form}>
          <input type='text' placeholder='Name ans surname'/>
          <input type='text' placeholder='Email Address'/>
          <input type='text' placeholder='Phone Number (optional)'/>
          <textarea className={style.area} name='' id='' color='30' rows="10" placeholder='Messsage'></textarea>
          <button>Send Me</button>
        </form>
      </div>
    </div>
  )
}

export default Contactpage