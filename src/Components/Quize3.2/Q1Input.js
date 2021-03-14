import react from 'react';


class Q1Input extends react.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <input type="range" name="volume" min="0" max="10"></input>
  }

}

export default Q1Input;