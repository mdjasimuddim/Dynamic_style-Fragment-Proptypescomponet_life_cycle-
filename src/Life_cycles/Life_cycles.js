import React, { Component } from 'react'

// Mounting -> constructor -> Render -> componentDidMount
// Updating -> state/props -> render -> 
// Unmounting

export default class Life_cycles extends Component {
    constructor(props) {
      super(props)
      console.log("Constructor");
    
      this.state = {
        count : 0
      }
    }
    componentDidMount(){
        console.log("Mount Method");
    }
     handleMethod = () => {
        this.setState({
            count : this.state.count + 1
        })
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate");
        return true;
    }
  render() {
    {console.log("Render");}
    return (
      <div>
        <h1>Counter : {this.state.count} </h1>
        <button onClick={this.handleMethod}>+</button>
      </div>
    )
  }
}
