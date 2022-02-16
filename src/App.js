
import { Component } from 'react';
import './App.css';
import Statistics from './Components/Statistics';
import FeedbackOptions from './Components/FeedbackOptions';
import Section from './Components/Section/Section';
import Notification from './Components/Notification/Notification';
// console.log(Notification);

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onCLickBtnGoog = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  }

  onClickBtnBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }))
  }

  onClickBtnNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }))
  }

  countTotalFeedback() {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
    // console.log(total);
  }

  countPositiveFeedbackPercentage() {
    let positiveFeedBackPers = 0;
    if (this.state.good > 0 || this.state.neutral > 0 || this.state.bad > 0) {
      positiveFeedBackPers = Math.round((this.state.good / this.countTotalFeedback()) * 100);
    }


    return positiveFeedBackPers;

  }


  render() {
    // const total = this.state.good + this.state.neutral + this.state.bad;
    // const positiveFeedBackPers = Math.round((this.state.good / total) * 100);
    return (
      <div>
        <h1>Please leave feedback</h1>
        <Section />
        <FeedbackOptions onCLickBtnGoog={this.onCLickBtnGoog} onClickBtnBad={this.onClickBtnBad} onClickBtnNeutral={this.onClickBtnNeutral} />


        {!(this.state.good > 0 || this.state.neutral > 0 || this.state.bad > 0)
          ? <Notification message="There is no feedback" />
          : <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />}

      </div>
    )
  }
}

// options = {} onLeaveFeedback = {} 

export default App;
