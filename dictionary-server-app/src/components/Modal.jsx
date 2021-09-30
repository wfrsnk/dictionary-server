import React from 'react';

const Modal = ({ active, setActive, children }) => {d
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div
        className={active ? 'modalContent active' : 'modalContent '}
        onClick={(e) => e.stopPropagation()}>
        <form action="">
          <div>Термин</div>
          <input className="input" type="text" />
          <div>Определение</div>
          <input className="input description" type="text" />
          <div className="btn">{children}</div>
        </form>
      </div>
    </div>
  );
};


class Modal extends React.Component {
    constructor() {

    }
    render() {

    }
}




export default Modal;
