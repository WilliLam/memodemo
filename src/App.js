import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Board from './Table'
import shuffle from "./shuffle";
class Controller extends React.Component {
  constructor(props) {
    super();
    this.state = {size:2, boardState:this.generateBoardState()}

  }
  generateBoardState() {
    let values = ["A", "A", "B", "B", "C", "C", "D", "D", "R"]
    values = shuffle(values)
    // console.log(values)
    var board = new Array(3);
    for (var i = 0; i < 3;  i++) {
      board[i] = new Array(3);
      for (var j = 0; j< 3; j++)
        board[i][j] = values[i*3+j];
        // board[i][j] = values[i*2+j]
    }
    // console.log(values)
    return board
  }
  render() {
    return(
      <Board boardVals={this.state.boardState} size={3}/>
    )
  }
}







function App() {
  return (
    <div className="App">
      <Controller/>
      {/*<header className="App-header">*/}

      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
    </div>
  );
}

export default App;
