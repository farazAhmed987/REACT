import React from 'react'

const Card = ({member = {}}) => {
  return (
    <div className='bg-green-200 rounded-xl text-green-950 p-8 m-8  ' >

        <img className='rounded-full mx-auto' src={new URL(member.imgs || './assets/images/download1.jpg', import.meta.url).href} alt="Team Member" />
        <h2 className="name m-auto font-bold text-center">{member.name || 'john'}</h2>
        <p className="position text-center text-green-600">{member.position || 'it engineer'}</p>
        <p className="description">{ member.description || 'working as an it engineer in the company'}</p>
      
    </div>
  )
}

export default Card
