import React from 'react'
import img1 from '../assets/images/download1.jpg'
import img2 from '../assets/images/download2.jpg'
import img3 from '../assets/images/download3.jpg'

const imageMap = {
  'download1.jpg': img1,
  'download2.jpg': img2,
  'download3.jpg': img3,
}

const Card = ({member = {}}) => {
  // Extract filename from path if full path is passed
  const filename = member.imgs?.split('/').pop() || 'download1.jpg'
  const imageSrc = imageMap[filename] || img1

  return (
    <div className='bg-green-200 rounded-xl text-green-950 p-8 m-8  ' >

        <img className='rounded-full mx-auto w-32 h-32 object-cover' src={imageSrc} alt="Team Member" />
        <h2 className="name m-auto font-bold text-center">{member.name || 'john'}</h2>
        <p className="position text-center text-green-600">{member.position || 'it engineer'}</p>
        <p className="description">{ member.description || 'working as an it engineer in the company'}</p>
      
    </div>
  )
}

export default Card
