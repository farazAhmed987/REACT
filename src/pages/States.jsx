import React, { useState } from 'react'
import Card from '../components/Card'

function States() {
  const [count, setcount] = useState(0)
  const [text, applyText] = useState("")
  const [toggle, setToggle] = useState(false)

  return (
    <div className="w-full h-vh min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">

        {/* Card Component */}
        <Card />

        {/* Count and Buttons Section */}
        <div className="p-6 border-t border-gray-200">
          <div className="text-center mb-4">
            <p className="text-2xl font-bold text-gray-800">{count}</p>
          </div>

          <div className='flex-col justify-center items-center'>
            <div className="flex gap-3 justify-center">
              <h3>Reactions</h3>
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition-all"
                onClick={() => setcount(count + 1)}
              >
                +
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg transition-all"
                onClick={() => setcount(count - 1)}
              >
                −
              </button>
            </div>
            <div>
              <h3 className={`font-bold ${toggle ? 'text-green-300' : 'text-red-400'}`}>
                {toggle ? `liked` : `not liked`}
              </h3>
              <button
                className='text-white bg-green-500 p-2 m-2 rounded-md'
                onClick={() => { setToggle(!toggle) }}
              >
                {toggle ? 'DIslike' : "like"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default States
