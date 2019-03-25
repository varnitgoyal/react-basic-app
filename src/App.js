import React, { Component } from 'react';

import './App.css';
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      counter:0,
    };
  }

  setCounter=()=>{
    
    this.setState({
      counter:this.state.counter+1
    })
  }

  render() {
    return (
      <div className="App">
  
      
          <Header className="header" count={this.state.counter}/>
 
        <Main counter={this.setCounter} />
        <Footer/>
  
      </div>
    );
  }
}

export default App;
