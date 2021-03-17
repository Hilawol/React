import React, { Component } from 'react';

export default class Checkbox extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div style={{ padding: "10px" }}>
        <input type="checkbox" defaultChecked={this.props.checked} />
        <lable style={{ margin: "10px" }}>{this.props.text}</lable>
      </div>

    )
  }
}