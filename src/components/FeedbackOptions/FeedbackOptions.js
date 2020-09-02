import React from 'react';
import s from '../styles.module.scss';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const functionHandler = e => {
    const type = e.target.textContent.toLowerCase();

    onLeaveFeedback(type);
    // options();
  };

  return (
    <div className={s.feedbackBox}>
      <button className={s.button} onClick={functionHandler}>
        Good
      </button>

      <button className={s.button} onClick={functionHandler}>
        Neutral
      </button>

      <button className={s.button} onClick={functionHandler}>
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  // options: PropTypes.func.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
