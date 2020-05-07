import React from "react";

class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showVal: false}
    }
    //
    // componentDidMount() {
    //     let card = document.getElementsByClassName("flip-card");
    //     for (var i = 0; i < card.length; i++) {
    //         card[i].addEventListener('click', function(i) {
    //             this.match()
    //             if (card[i].classList.contains('on')) {
    //                 card[i].classList.remove('off');
    //                 card[i].classList.add('on');
    //             } else {
    //                 card[i].classList.remove('on');
    //                 card[i].classList.add('off');
    //             }
    //     }.bind(this));
    //     }
    //
    // }

    // handleClick() {
    //
    // }


    // componentDidMount() {
    //     if (this.props.val in this.props.matched ) {
    //         this.setState({showVal:true})
    //     }
    //     if (this.props.matching != null) {
    //         // console.log(this.props.matching)
    //         if (this.props.matching[1] === this.props.index) {
    //             this.setState({showVal:true})
    //         }
    //     }
    // }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     // console.log("helloThere")
    //     if (this.props.showVal in this.props.matched ) {
    //         this.setState({showVal:true})
    //     }
    //     if (this.props.matching === "true" && this.state.showVal === false) {
    //         // console.log(this.props.matching, "wowzers")
    //         console.log("tile matching", this.props.matching , this.props.index, "wtf")
    //         this.setState({showVal:true})
    //         // }
    //     }
    //     if (this.props.matching === "false" && this.state.showVal === true) {
    //         this.setState({showVal:false})
    //     }
    // }

    match = (e) => {
        e.preventDefault()
        let card = e.currentTarget
        console.log("yallah", card)

        // if (card.classList.contains('on')) {
        //     card.classList.remove('on');
        //     card.classList.add('off');
        // } else {
        //     card.classList.remove('off');
        //     card.classList.add('on');
        // }
        // e.preventDefault();
        // console.log(this.props.val)
        this.props.onClick(this.props.val, this.props.index)
        // this.setState({showVal:true})
    }

    // <div id="card">
    //                     <div className="front">
    //                         <button type={"button"} onClick={this.match}> {"?"} </button>
    //                     </div>
    //                     {/*<div className="back">*/}
    //                     {/*    Back content*/}
    //                     {/*</div>*/}
    //                 </div>

    render() {
        if (this.props.showVal === "false") {
            return(
                <div className="flip-card off" onClick={function(e) {this.match(e)}.bind(this)}>
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <h1>?</h1>
                        </div>
                        <div className="flip-card-back">
                            <h1>{this.props.val}</h1>
                            {/*<p>Architect & Engineer</p>*/}
                            {/*<p>We love that guy</p>*/}
                        </div>
                    </div>
                </div>


            )
        } else {
            return (
                <div className="flip-card on">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <h1>{this.props.val}</h1>
                        </div>
                        <div className="flip-card-back">
                            <h1>{this.props.val}</h1>
                            {/*<p>Architect & Engineer</p>*/}
                            {/*<p>We love that guy</p>*/}
                        </div>
                    </div>
                </div>

            )
        }
    }
}

export default Tile;
