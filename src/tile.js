import React from "react";

class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showVal: false}
    }

    match = (e) => {
        e.preventDefault()
        // let card = e.currentTarget
        // console.log("yallah", card)
        this.props.onClick(this.props.val, this.props.index)
    }

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
                        </div>
                    </div>
                </div>

            )
        }
    }
}

export default Tile;
