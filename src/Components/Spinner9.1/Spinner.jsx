import React, { Component } from 'react'
import './style.css'

export default class Spinner extends Component {
  constructor(props) {
    super(props);
    this.state = { showContent: false };

  }

  componentDidMount() {
    setTimeout(() => this.setState({ showContent: true }), 5000);
  }
  render() {
    const spinner = <div class="spinner-2 spninnerDiv"></div>;
    const content = <div class="content spninnerDiv">This is content</div>;
    return (
      this.state.showContent ? content : spinner
    )
  }
}
