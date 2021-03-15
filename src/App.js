import logo from './logo.svg';
import './App.css';
import './Components/Cards4.2/Card.css'
import Basic from './Components/Basics2.2/Basics'
import Boxes from './Components/Boxes3.1/Boxes';
import Box4 from './Components/Boxes3.1/Box4';
import Quize from './Components/Quize3.2/Quiz';
import Button from './Components/Buttons4.1/Button';
import Card from './Components/Cards4.2/Card.component';
import Increment from './Components/Increment7.1/Increment';
import Mytest from './Components/testEvent/test';


function App() {
  return (
    <div>

      {/* <Mytest /> */}
      <Increment />

      {/* <Card source="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
        title="cats"
        description="Nice Cat"
        share="https://en.wikipedia.org/wiki/Cats_(musical)"
        explore="https://www.google.com/search?q=cats&rlz=1C5CHFA_enIL893IL893&oq=cats&aqs=chrome..69i57j46i67i433j46l2j0j46j0l2j46l2.1047j0j1&sourceid=chrome&ie=UTF-8"
      /> */}

      {/* <Button text={"Important"} weigth={"bold"} />
      <Button text={"Not Important"} /> */}

      {/* <Quize /> */}

      {/* <div className="ui container comments">
        <div className="comment">
          <a herf="/" className="avatar">
            <img alt="avatar" src='https://source.unsplash.com/random' />
          </a>
        </div>
        <div className="content">
          <a href="/" className="author">
            Sam
          </a>
          <div className="metadata">
            <span className="date">Today at 6:00PM</span>å
          </div>
          <div className="text">Nice blog post!</div>
        </div>
      </div> */}

      {/* <Basic /> */}
      {/* <Boxes /> */}
    </div>
  );
}

export default App;


