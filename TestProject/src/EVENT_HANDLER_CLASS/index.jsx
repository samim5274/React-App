import React, { Component } from 'react'

class EVENT_HANDLER_CLASS extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         changeValue : ''
      }
    }
    

    handleOnChnage = (e) => {
        this.setState({
            changeValue : e.target.value
        }, () => {
            console.log(this.state.changeValue);
        });
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.handleOnChnage} />
                <p className='p-tag'>{this.state.changeValue}</p>
            </div>
        )
    }
}

export default EVENT_HANDLER_CLASS;