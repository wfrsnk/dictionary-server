
import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';

import Modal from './components/Modal';

const App = () => {

  const [modalActive, setModalActive] = useState(false)

  return (
    <div>
      <Header />
      <div className="btn">
      <button className = "button" onClick={() => setModalActive(true)}>Добавить</button>
      </div>
      <Modal active = {modalActive} setActive = {setModalActive}> 
          <button className = "button save" onClick={() => setModalActive(false)}>Сохранить</button>
      </Modal>
    </div>
  );
}

export default App;
