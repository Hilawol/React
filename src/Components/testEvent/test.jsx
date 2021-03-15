import React, { Component } from 'react'

export default class Mytest extends Component {

  clickEvent() {
    console.log("event occured");
  }

  render() {
    return (
      <div>
        <button onClick={this.clickEvent}>click</button>
      </div>
    )
  }
}
