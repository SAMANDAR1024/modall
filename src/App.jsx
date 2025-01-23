import { useState } from "react";
import Modal from "./pages/Modal";
import Royhat from "./pages/Royhat";
import Add from "./pages/Add";
import Map from "./pages/Map";

function App() {
  const [state, setState] = useState({ name: "", surName: "", age: "" });
  const [list, setList] = useState([]);
  const [modal, setModal] = useState(false);

  return (
    <div className="w-full m-auto container px-4 py-4">
      <Add setModal={setModal} />

      <Map list={list} />

      {modal && (
        <Modal>
          <Royhat
            state={state}
            setState={setState}
            setList={setList}
            list={list}
            setModal={setModal}
            modal={modal}
          />
        </Modal> 
      )}
    </div>
  );
}

export default App;
