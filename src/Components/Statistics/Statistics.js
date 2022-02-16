import { Component } from "react";


class Statistics extends Component {

    render() {
        return (
            <div>
                <h2>Statistics</h2>
                <p>Good: {this.props.good}</p>
                <p>Neutral: {this.props.neutral}</p>
                <p>Bad: {this.props.bad}</p>
                <div>
                    <p>Total: {this.props.total}</p>
                    <p>Positive feedback: {this.props.positivePercentage}%</p>
                </div>
            </div>

        )
    }
}

export default Statistics;