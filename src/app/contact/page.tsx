import Image from 'next/image'
import React from 'react'

const contactinfo = () => {
  return (
    <div>
      <h1 className='text-2xl text-center mt-10'>This is contact page</h1>
      <Image src={'https://i.pinimg.com/736x/2e/cf/06/2ecf067a2069128f44d75d25a32e219e.jpg'} alt='Picture' width={200} height={350} className='mt-5 mx-auto'/>
    </div>
  )
}

export default contactinfo
