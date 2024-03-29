import React, { Component } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';
import Statistics from '../Statistics/Statistics';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
   }
  
  onLeaveFeedback = ({ target }) => {
    const { value } = target.dataset;
    this.setState((prevState) => ({ [value]: prevState[value] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad} = this.state;
    return (
      <>
        <Section title="Please leave feedback">
         
        
          <FeedbackOptions options={["good","neutral","bad"]} onLeaveFeedback={this.onLeaveFeedback} />

        </Section>
        <Section title="Statistics">

          <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>
          

        </Section>
      </>
    
  )
  }
}