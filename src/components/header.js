import React, { Component } from 'react'


class header extends Component {
 constructor(props){
   super(props);
   


 }

    


  
  render() {
    return (
      <div class="header">
          <h1>Header</h1>

          <h1>counter</h1>

          <p>{this.props.count}</p> 
        
      </div>
    )
  }
}

export default header
