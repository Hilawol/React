import React, { Component } from 'react';
import Q1Title from './Q1Title';
import Q1Input from './Q1Input';

export default class Q1 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <Q1Title />
      <Q1Input />
    </div>
  }
}
