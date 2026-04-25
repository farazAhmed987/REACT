import React from 'react'

const Forms = ({obj}) => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form className="bg-white p-6 rounded-lg shadow-md w-80">
          <h2 className="text-xl font-bold mb-4 text-center">{obj.head}</h2>

          <input
            type="text"
            placeholder={obj.name}
            className="w-full mb-3 px-3 py-2 border rounded"
          />

          <input
            type="email"
            placeholder={obj.email}
            className="w-full mb-3 px-3 py-2 border rounded"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Forms
