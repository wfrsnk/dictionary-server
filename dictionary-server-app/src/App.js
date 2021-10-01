
import React from 'react';
import './App.css';
import Header from './components/Header';
import Button from './components/Button';
import Modal from './components/Modal';
import Term from './components/Term';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      terms: [],
      active: false
    }
  }

  addTerm = (term, description) => {

    const newTerm = {
        term: term,
        description: description,
      };  
    this.setState({terms: this.state.terms.concat(newTerm) }); 
    
  }

  setModalActive = (value) =>{
    this.setState({active: value})
  }
 
  render(){
    const terms =  this.state.terms
    console.log('terms: ', terms);

    return(  <div>
      <Header />
      <Button dopClass = '' value = {true} setActive = {this.setModalActive}>
        Добавить
      </Button>
      <Modal active = {this.state.active} setActive = {this.setModalActive} newTerm = {this.addTerm}> 
      </Modal>
      <hr width = "50%"/>

      <Term></Term>
     

    </div>);
  }
 
// const App = () => {

//   const [modalActive, setModalActive] = useState(false)

//   return (
    // <div>
    //   <Header />
    //   <Button dopClass = '' value = {true} setActive = {setModalActive}>
    //     Добавить
    //   </Button>
    //   <Modal active = {modalActive} setActive = {setModalActive}> 
    //     <Button dopClass = 'save' value = {false} setActive = {setModalActive}>
    //        Сохранить
    //     </Button>
    //   </Modal>
    //   <hr width = "50%"/>
    // </div>
//   );
}

export default App;
