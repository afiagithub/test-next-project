import Image from 'next/image'
import React from 'react'
import img from "../../../public/pic.jpg"

const aboutCompo = () => {
  return (
    <div>
      <h1 className='text-2xl text-center mt-10'>This is about page</h1>
      <Image src={img} alt='Picture' height={350} className='mt-5 mx-auto'/>
    </div>
  )
}

export default aboutCompo
