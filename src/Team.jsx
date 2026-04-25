import React from 'react'
import Card from './Card'
const Team = () => {
  const  obj1 =[
        {
            imgs:'./assets/images/download1.jpg',
            name: 'Usman',
            position: 'Software Engineer',
            description: 'Usman is a passionate software engineer with 5 years of experience in developing scalable web applications.'
        },
        {
            imgs: './assets/images/download2.jpg',
            name: 'Usman khan',
            position: 'Software Engineer',
            description: 'Usman is a passionate software engineer with 5 years of experience in developing scalable web applications.'
        },
        {            imgs: './assets/images/download3.jpg',
            name: 'arslan ',
            position: 'IT Engineer',
            description: 'Arslan is a passionate software engineer with 5 years of experience in developing scalable web applications.'
        }
    ]
  return (
   <>
    <div className='bg-gray-300 h-screen w-full p-10    text-gray-700'>

        <h1 className='text-[2rem] font-bold text-center text-green-800'>
            Our Team
        </h1>
    
    <div className='flex justify-center items-center bg-gray-300 gap-4 mt-4 text-2xl'>
        {obj1.map((member, index) => (
            <Card key={index} member={member} />
        ))}
    </div>

        <footer className='text-center text-gray-500 mt-8'>
            &copy; 2026 Our Company. All rights reserved.
        </footer>

    </div>
   
   </>
  )
}

export default Team
