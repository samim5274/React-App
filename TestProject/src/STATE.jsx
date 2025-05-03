import React, { Component } from 'react'
import './App.css';

export default class STATE extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 1
      }
    }
    
    handeleIncrement = () => {
        this.setState({
            count: this.state.count + 1
        });
    }
    handeleDecrement = () => {
        this.setState({
            count: this.state.count - 1
        });
    }

  render() {
    const {count} = this.state;
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={this.handeleIncrement}  disabled={count===5 ? true : false}>+</button>
            <button onClick={this.handeleDecrement} disabled={count===0 ? true : false}>-</button>
        </div>
    )
  }
}
