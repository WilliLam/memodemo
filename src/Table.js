import React from "react";
// import $ from "jquery";
import "jquery";
import applause from "./applauseSound.mp3"
// import "flip";
import Tile from "./tile";
import "./tiles.css"


function arraysEqual(arr1, arr2) {
    if(arr1.length !== arr2.length)
        return false;
    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
            return false;
    }

    return true;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

class Board extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            rows : [],
            matched: new Set(),
            matching:null,
            matching1:null,
            flipping: false
        };
    }

    componentDidMount() {
        this.renderTiles()


    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.matched.size === 4) {
            let sd = new Audio(applause)
            sd.play()
        }
    }

    renderTiles = () => {
        console.log("renderTiles", this.state.matching)
        // console.log("render")
        // this.setState({rows:[]})
        let newTiles = []
        for (var i = 0; i < this.props.size; i++){
          let rowID = `row${i}`
          let cell = []
          for (var idx = 0; idx < this.props.size; idx++){
              let cellID = `cell${i}-${idx}`
              if (this.props.boardVals[i][idx] === undefined) {
                  cell.push(
                    <td key={cellID} id={cellID}/>
                )
              } else {
                // console.log("board matching", [i, idx], this.state.matching)
                // if (this.state.matching !== null) {
                //   console.log(this.state.matching[1])
                // }
                if ((this.state.matching !== null && arraysEqual([i, idx] , this.state.matching[1])) ||
                (this.state.matching1 !== null && arraysEqual([i, idx] , this.state.matching1[1])) ||
                (this.state.matched.has(this.props.boardVals[i][idx]))
                ){
                // showVal if matched or matching console.log("match found")
                cell.push(
                <td key={cellID} id={cellID}><Tile val={this.props.boardVals[i][idx]} index={[i, idx]} onClick={this.clickTile}
                          showVal="true"/></td>)
                }

                else{
                cell.push(
                <td key={cellID} id={cellID}><Tile val={this.props.boardVals[i][idx]} index={[i, idx]} onClick={this.clickTile}
                          showVal="false"/></td>)
                }
            }
          }

          newTiles.push(<tr key={i} id={rowID}>{cell}</tr>)
          //   newTiles.push(<tr id={"cake"}></tr>)
        }
        // console.log(newTiles)
        // console.log("yeehaw")
        if (this.state.rows !== newTiles) {
            this.setState({rows:newTiles})
        }

    }

    checkMatch = async (tile, index) => {
        if (this.state.matched.has(tile)) {
            console.log("already matched")
            return
        }

        else if (this.state.matching === null ) {
            // console.log("matching", tile)
            this.setState({matching:[tile, index]},
                ()=> {
                    this.renderTiles()
                })
            // this.updateTiles(tile, index)
            return
        } else if (index === this.state.matching[1]) {
            console.log("same clicked")
            return
        }
        else {
            if (this.props.matches[this.state.matching[0]] === tile ||
                this.props.matches[tile] === this.state.matching[0] ) {

                this.setState({matched: this.state.matched.add(tile).add(this.state.matching[0]), matching:null},
                ()=> {
                    this.renderTiles()
                })
                // this.setState({matching:null})
                return
            } else{
                this.setState({matching1:[tile, index]},
                    ()=> {
                    this.renderTiles()
                })
                await sleep(1000)
                // console.log("goofed up")
                this.setState({matching:null, matching1:null},
                ()=> {
                    this.renderTiles()
                })
                return "wrong tile"
            }
        }
    }

     clickTile = async (tile, index) =>  {
        if (this.state.flipping) {
            return
        }
        this.setState({flipping : true},
            // }, 1000)
         async ()=> {
             await this.checkMatch(tile, index)

             await sleep(600)

             // setTimeout(()=> {
                this.setState({flipping:false})
                // if (res === "wrong tile") {

                // }
        }

            )
         // this.state.flipping = true
         // await this.checkMatch(tile, index)
         // await sleep(1000)
         // this.state.flipping = false
        // if (this.state.flipping) {
        //     return
        // } else{
        //     sleep(1000)
        //     this.setState({flipping : true},
        //         ()=> {
        //             setTimeout(()=> {
        //                 this.setState({flipping:false})
        //             }, 1000)
        //
        //         })
        // }
    }

    render()
        {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col s12 board">
                            <table id="simple-board">
                                <tbody>
                                {this.state.rows}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )
        }
}

export default Board;
//
