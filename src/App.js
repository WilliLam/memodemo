import React from 'react';
import './App.css';
import Board from './Table'
import shuffle from "./shuffle";
import $ from 'jquery';
class Controller extends React.Component {
  constructor(props) {
    super();
    let inputs = {"Yalla!": "Let's go!", "Habibi":"Dear", "Salam": "Peace", "Walad":"Boy",
        "Binnit": "Girl", "Wahid":"One", "Asfi":"Sorry", "Sabah heir":"Good morning", "A":"B"};
    this.state = {inputs:inputs}
    let board = this.generateBoardState(this.state.inputs);
    let boardState = board[0];
    let matches = board[1];
    this.updateInputs = this.updateInputs.bind(this)
    this.state = {boardState:boardState, matches:matches, inputs:inputs}

  }
  updateInputs (newInputs) {
    this.setState({inputs:newInputs})
    return
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.inputs !== this.state.inputs) {
      console.log("SUER UPDATE")
      // this.generateBoardState(this.state.inputs)
      let board = this.generateBoardState(this.state.inputs);
      let boardState = board[0];
      let matches = board[1];
      this.updateInputs = this.updateInputs.bind(this)
      this.setState({boardState:boardState, matches:matches})
    }
  }

  generateBoardState(inputs) {
    // let Testvalues = ["A", "A", "B", "B", "C", "C", "D", "D", "R"];

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
        if (values[i * size + j] !== null) {
          board[i][j] = values[i * size + j];
        }
      }
    }
    return [board, inputs]
  }
  render() {
    return(
        <div>
          <Board boardVals={this.state.boardState} matches={this.state.matches} size={this.state.boardState.length}/>
          <CustomInput update={this.updateInputs} inputs={this.state.inputs}></CustomInput>
        </div>
      )
  }
}

class CustomInput extends React.Component {
  constructor(props) {
    super();
    this.state = {newInputs: {"Yalla!": "Let's go!", "Habibi":"Dear", "Salam": "Peace", "Walad":"Boy",
        "Binnit": "Girl", "Wahid":"One", "Asfi":"Sorry", "Sabah heir":"Good morning", "A":"B"}}
  }

  // updateNewInputs() {
    // this.setState({newInputs:$("#inputBox").val() })

  // }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return false
  }

  render() {
    // console.log("test", )
    let strInputs = JSON.stringify(this.props.inputs)
    console.log("testing", strInputs)
    return(
        <div style={{display:"grid"}}>
          <h4><u>Custom input</u></h4>
          {/*value={JSON.stringify(this.state.newInputs)*/}
          <textarea style={{height:"6rem"}} id="inputBox" placeholder={strInputs}/>
          <div style={{marginLeft:"auto", marginRight:"0px", marginTop:"0.5rem", marginBottom:"0.5rem"}}>
            <button
                    onClick={() => this.props.update(JSON.parse($("#inputBox").val()))}>
              Update
            </button>
          </div>
        </div>
    )
  }

}






function App() {
  return (
      <div>
        <div className="App" style={{textAlign:"center", width:"50%", margin:"0 auto"}}>
          <h1>MemoDemo</h1>
          <br/>
          <Controller/>
        </div>
      </div>
  );
}

export default App;
