import React from 'react'

function Map({list, setModal}) {
  return (
    <div>
        {list.map((item) => {
          return (
            <div className="w-72 border-gray-700 border p-5 relative m-5">
              <p>
                <b>ISMI:</b> {item.name}
              </p>
              <p>
                <b>FAMILIYASI:</b> {item.surName}
              </p>
              <p>
                <b>YOSHI:</b> {item.age}
              </p>
              <button onClick={()=>{
                setModal(false)
            }}  className="absolute top-1 right-1">⨉</button>
            </div>
          );
        })}
      </div>
  )
}

export default Map