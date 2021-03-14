import react from 'react';
import QuizeTitle from './QuizTitle';
import Q1 from './Q1';
import Q2 from './Q2';


class Quiz extends react.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div style={{ padding: "20px", margin: "25% auto", width: "400px", height: "200px", border: "1px solid black" }}>
      <QuizeTitle />
      <Q1 />
      <Q2 />
    </div>
  }
}

export default Quiz;