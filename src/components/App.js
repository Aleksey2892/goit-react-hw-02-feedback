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
  };

  addStat = type => {
    this.setState(prevState => ({ [type]: prevState[type] + 1 }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = total => {
    return Math.round(100 / (total / this.state.good));
  };

  // moreStatisticsHandler = () => {
  // this.countTotalFeedback();
  // this.countPositiveFeedbackPercentage();
  // };

  render() {
    const { good, neutral, bad } = this.state;

    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(total);

    const isSwhowStatistics = total > 0;

    return (
      <>
        <SectionTitle title={'Please leave feedback'}>
          <FeedbackOptions
            // options={this.moreStatisticsHandler}
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
