import React, { Component } from 'react';

import SectionTitle from './SectionTitle/SectionTitle';

import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleAddStat = ({ target }) => {
    const { name } = target;

    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = total => {
    return Math.round((this.state.good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const isSwhowStatistics = total > 0;

    return (
      <>
        <SectionTitle title={'Please leave feedback'}>
          <FeedbackOptions onLeaveFeedback={this.handleAddStat} />
        </SectionTitle>

        <SectionTitle title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={this.countPositiveFeedbackPercentage(total)}
            isSwhowStatistics={isSwhowStatistics}
          />
        </SectionTitle>
      </>
    );
  }
}

export default App;
