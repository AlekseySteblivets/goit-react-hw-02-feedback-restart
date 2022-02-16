import { Component } from "react";

class FeedbackOptions extends Component {

    render() {
        return (
            <div>

                <button onClick={this.props.onCLickBtnGoog} >Good</button>
                <button onClick={this.props.onClickBtnNeutral}>Neutral</button>
                <button onClick={this.props.onClickBtnBad}>Bad</button>
            </div>
        )
    }
}

export default FeedbackOptions;