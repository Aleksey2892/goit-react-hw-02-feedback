import React, { Component } from 'react';

import SectionTitle from './SectionTitle/SectionTitle';
import Notification from './Notification/Notification';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

class App extends Component {
  static defaultProps = {
    startValue: 0,
  };

  state = {
    good: this.props.startValue,
    neutral: this.props.startValue,
    bad: this.props.startValue,
    total: this.props.startValue,
    positivePercentage: this.props.startValue,
  };

  addStat = type => {
    this.setState(prevState => {
      return {
        [type]: prevState[type] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    this.setState(prevState => {
      const totalValue = prevState.good + prevState.neutral + prevState.bad;
      return {
        total: totalValue,
      };
    });
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => {
      const percentage = Math.round(100 / (prevState.total / prevState.good));
      return {
        positivePercentage: percentage,
      };
    });
  };

  moreStatisticsHandler = () => {
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.state;
    const isSwhowStatistics = total > 0;

    return (
      <>
        <SectionTitle title={'Please leave feedback'}>
          <FeedbackOptions
            options={this.moreStatisticsHandler}
            onLeaveFeedback={this.addStat}
          />
        </SectionTitle>

        <SectionTitle title={'Statistics'}>
          {isSwhowStatistics ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message={'No feedback given'} />
          )}
        </SectionTitle>
      </>
    );
  }
}

export default App;
