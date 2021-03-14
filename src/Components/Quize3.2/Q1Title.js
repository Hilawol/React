import React, { Component } from 'react'

export default class Q1Title extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <lable for="volume" style={{ display: "block", margin: "10px 0" }}>How Much you love front end?</lable>;
  }
}