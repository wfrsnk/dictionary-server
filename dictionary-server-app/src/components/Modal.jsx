import React, { useState } from 'react';
import Button from './Button';

const Modal = ({ active, setActive, newTerm }) => {
  const [changeHandlerTerm, setChangeHandlerTerm] = useState('');
  const [changeHandlerDescription, setChangeHandlerDescription] = useState('');

  const getInputTerm = (event) => {
    setChangeHandlerTerm(event.target.value);
    console.log('changeHandlerTerm: ', changeHandlerTerm);
  };

  const getInputDescription = (event) => {
    setChangeHandlerDescription(event.target.value);
    console.log('changeHandlerDescription: ', changeHandlerDescription);
  };

  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div
        className={active ? 'modalContent active' : 'modalContent '}
        onClick={(e) => e.stopPropagation()}>
        <form action="">
          <div>Термин</div>
          <input className="input" type="text" onInput={getInputTerm} />
          <div>Определение</div>
          <input className="input description" type="text" onInput={getInputDescription} />
          <div className="btn">
            <Button
              dopClass="save"
              value={false}
              setActive={setActive}>
              Сохранить
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

// class Modal extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       active: this.props.active,
//     };
//   }

//   setStateActive(flag) {
//     this.setState({ active: flag });
//   }

//   render() {
//     return (
//       <div
//         className={this.state.active ? 'modal active' : 'modal'}
//         onClick={this.setStateActive(false)}>
//         <div
//           className={this.state.active ? 'modalContent active' : 'modalContent '}
//           onClick={(e) => e.stopPropagation()}>
//           <form action="">
//             <div>Термин</div>
//             <input className="input" type="text" />
//             <div>Определение</div>
//             <input className="input description" type="text" />
//             <div className="btn">{this.props.children}</div>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

export default Modal;
