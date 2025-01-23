import React from 'react'

function Add({setModal}) {
  return (
    <button
        onClick={() => {
          setModal(true);
        }}
        className="w-32 p-2 rounded-lg text-white bg-red-500"
      >
        Qoshish
      </button>
  )
}

export default Add