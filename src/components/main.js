import React, { Component } from 'react'

export class Main extends Component {
  constructor(props){
      super(props); 
  }  
  render() {
    return (
      <div className="main">
        <h1>main</h1>
        {console.log(this.props)}
        <button onClick={this.props.counter}> click here </button>
      </div>
    )
  }
}

export default Main
