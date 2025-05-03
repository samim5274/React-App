import React, { Component } from 'react'
import LogInPage from './LogInPage'
import HomePage from './HomePage'

class CONDITIONAL_RENDARING extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      isLoggedIn: true
    }
  }
  

  render() {
    const { isLoggedIn } = this.state
    let elemtent;
    
    elemtent = isLoggedIn ? <HomePage /> : <LogInPage />

    return (
      <div>
        {elemtent}
      </div>
    );
  }
}

export default CONDITIONAL_RENDARING;