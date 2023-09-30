import React from 'react'

export const TopButtons = () => {

  const cities = [
    {
      id:1,
      title:'London'
    },
    {
      id:2,
      title:'Denmark'
    },
    {
      id:3,
      title:'Green land'
    },
    {
      id:4,
      title:'Ice land'
    },
    {
      id:5,
      title:'Toronto'
    },
]
  return (

     <div className='flex items-center justify-around my-6'>
         {cities.map((city)=> (
             <button key={city.id} className='text-white font-medium text-lg'>
             {city.title}
             
             </button>
             ))}
     </div>
  )
}
