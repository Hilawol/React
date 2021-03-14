import React, { Component } from 'react';
import Q2Title from './Q2Title';
import Q2Input from './Q2Input';

export default class Q2 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <Q2Title />
      <Q2Input />
    </div>
  }
}
