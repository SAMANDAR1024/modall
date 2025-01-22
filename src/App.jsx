import { useState } from "react";
import Modal from "./pages/Modal";

function App() {
  const [state, setState] = useState({ name: "", surName: "", age: "" });
  const [list, setList] = useState([]);
  const [modal, setModal] = useState(false);

  return (
    <div className="w-full m-auto container px-4 py-4">
      <button
        onClick={() => {
          setModal(true);
        }}
        className="w-32 p-2 rounded-lg text-white bg-red-500"
      >
        Qoshish
      </button>
   
      <div>
        {list.map((item) => {
          return (
            <div className="w-72 border-gray-700 border p-5 relative m-5">
              <p><b>ISMI:</b> {item.name}</p>
              <p><b>FAMILIYASI:</b> {item.surName}</p>
              <p><b>YOSHI:</b> {item.age}</p>
              <button 
               className="absolute top-1 right-1">⨉</button>
            </div>

        
          );
        })}
      </div>

      {modal && (
        <Modal
          state={state}
          setState={setState}
          setList={setList}
          list={list}
          setModal={setModal}
          modal={modal}
        />
      )}

    </div>
  );
}

export default App;
