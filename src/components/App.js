import React, { Component } from 'react';

import Statistics from './Statistics';

import s from './styles.module.scss';

class App extends Component {
  static defaultProps = {
    startValue: 0,
  };

  state = {
    good: this.props.startValue,
    neutral: this.props.startValue,
    bad: this.props.startValue,
    total: this.props.startValue,
    posFeedback: this.props.startValue,
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
        posFeedback: percentage,
      };
    });
  };

  handleStat = type => {
    this.addStat(type);
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  render() {
    return (
      <>
        <div className={s.feedbackBox}>
          <p className={s.titleFeedback}>Please leave feedback</p>

          <button className={s.button} onClick={() => this.handleStat('good')}>
            Good
          </button>

          <button
            className={s.button}
            onClick={() => this.handleStat('neutral')}
          >
            Neutral
          </button>

          <button className={s.button} onClick={() => this.handleStat('bad')}>
            Bad
          </button>
        </div>

        <Statistics state={this.state} />
      </>
    );
  }
}

export default App;
