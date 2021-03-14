import logo from './logo.svg';
import './App.css';
import Basic from './Components/Basics2.2/Basics'
import Boxes from './Components/Boxes3.1/Boxes';
import Box4 from './Components/Boxes3.1/Box4';
import Quize from './Components/Quize3.2/Quiz';

function App() {
  return (
    <div>
      <Quize />
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


