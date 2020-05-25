import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Board from './Table'
import shuffle from "./shuffle";
class Controller extends React.Component {
  constructor(props) {
    super();
    let board = this.generateBoardState();
    let boardState = board[0];
    let matches = board[1];

    this.state = {size:2, boardState:boardState, matches:matches}

  }
  generateBoardState() {
    // let values = ["A", "A", "B", "B", "C", "C", "D", "D", "R"];
    let inputs = {"Yalla!": "Let's go!", "Habibi":"Dear", "Salam": "Peace", "Walad":"Boy",
        "Binnit": "Girl", "Wahid":"One", "Asfi":"Sorry", "Sabah heir":"Good morning"};
    let values2 = [];
    for (const key in inputs) {
      values2.push(key);
      values2.push(inputs[key])
    }
    let values = shuffle(values2);
    console.log("vals2" , values2)
    console.log(values);
    let size = Math.ceil(Math.sqrt(values.length));

    var board = new Array(size);
    for (var i = 0; i < size;  i++) {
      board[i] = new Array(size);
      for (var j = 0; j< size; j++) {
        if (values[i * 4 + j] !== null) {
          board[i][j] = values[i * 4 + j];
        }
      }
      // board[i][j] = values[i*2+j]
    }
    // console.log(values)
    return [board, inputs]
  }
  render() {
    return(
      <Board boardVals={this.state.boardState} matches={this.state.matches} size={this.state.boardState.length}/>
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
