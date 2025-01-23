import React from 'react'

function Royhat({state, setState, setList, list, setModal, modal}) {
  return (
    <div className="mx-auto w-[500px] bg-slate-100 px-10 py-14 mt-6 rounded-xl ">
        <h1 className="font-bold text-3xl mb-5">ROYHATDAN OTIN</h1>
      <div className="flex flex-col mb-2">
        <label>Ism</label>
        <input
          className="border border-gray-600 p-2 rounded-md"
          value={state.name}
          onChange={(e) => {
            const newState = {
              ...state,
              name: e.currentTarget.value,
            };
            setState(newState);
          }}
          type="text"
        />
      </div>
      <div className="flex flex-col mb-2">
        <label>Familia</label>
        <input
          className="border border-gray-600 p-2 rounded-md"
          value={state.surName}
          onChange={(e) => {
            const newState = {
              ...state,
              surName: e.currentTarget.value,
            };
            setState(newState);
          }}
          type="text"
        />
      </div>
      <div className="flex flex-col mb-2">
        <label>Yosh</label>
        <input
          className="border border-gray-600 p-2 rounded-md"
          value={state.age}
          onChange={(e) => {
            const newState = {
              ...state,
              age: e.currentTarget.value,
            };
            setState(newState);
          }}
          type="number"
        />

      </div>
        <div className="text-end mt-5 flex items-center gap-2 justify-end">
            <button onClick={()=>{
                setModal(false)
            }} className="bg-red-500 p-2  w-[100px] text-white rounded-lg">ORQAGA</button>
          <button
            className="bg-green-500 p-2  w-[150px] text-white rounded-lg"
            onClick={() => {
              setState({
                name: "",
                surName: "",
                age: "",
              });
              const new_arr = list.concat(state);
              setList(new_arr);
              setModal(false)
            }}
          >
            +Qoshish
          </button>
        </div>
    </div>
  )
}

export default Royhat