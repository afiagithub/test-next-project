import React from 'react'

const page = ({params}: {params: {id: string}}) => {
  return (
    <div>
      <p>Shirt Id: {params.id}</p>
    </div>
  )
}

export default page
