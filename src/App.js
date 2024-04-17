import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Clock from './chapter_04/Clock';
import Comment from './Comment';
import CommentList from './CommentList';
import commentList from './chapter_05/CommentList';
import useCounter from './chapter_07/useCounter';

function App() {
  return (
    <div className="App">
      <useCounter/>
      <Clock/>
      <CommentList/>
      <commentList/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Welcome name="홍길동"/>
      <div>
            <Welcome name="Mike" />
            <Welcome name="Steve" />
            <Welcome name="Jane" />
            </div>

    </div>
  );
}

export default App;
