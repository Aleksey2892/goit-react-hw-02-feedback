import React from 'react';
import s from '../styles.module.scss';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div className={s.feedbackBox}>
      <button className={s.button} name="good" onClick={onLeaveFeedback}>
        Good
      </button>

      <button className={s.button} name="neutral" onClick={onLeaveFeedback}>
        Neutral
      </button>

      <button className={s.button} name="bad" onClick={onLeaveFeedback}>
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
