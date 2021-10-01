
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
      active: false,

    }
  }

  addTerm = (termTitle, descriptionText) => {

    const newTerm = {
        term: termTitle,
        description: descriptionText,
      };  
    this.setState({terms: this.state.terms.concat(newTerm) }); 

  
    
  }

  setModalActive = (value) =>{
    this.setState({active: value})
  }
 
  render(){
  console.log(this.state.terms);
  console.log(this.state.active);

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
 
}

export default App;
