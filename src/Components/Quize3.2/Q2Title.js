import React, { Component } from 'react'

export default class Q2Title extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <lable for="topic" style={{ display: "block", margin: "10px 0" }}>What is you favorite front end feature/topic?</lable>;
  }
}