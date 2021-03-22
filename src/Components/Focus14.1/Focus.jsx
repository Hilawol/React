import React, { Component } from 'react'

export default class Focus extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount = () => {
    this.textInput.current.focus();
  }
  render() {
    return (
      <div>
        <label htmlFor="name" >Name:</label>
        <input ref={this.textInput} type="text" id="name" />
      </div>
    )
  }
}
