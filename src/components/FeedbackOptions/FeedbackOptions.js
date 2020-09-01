import React from 'react';
import s from '../styles.module.scss';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const functionHandler = type => {
    onLeaveFeedback(type);
    options();
  };

  return (
    <div className={s.feedbackBox}>
      <button className={s.button} onClick={() => functionHandler('good')}>
        Good
      </button>

      <button className={s.button} onClick={() => functionHandler('neutral')}>
        Neutral
      </button>

      <button className={s.button} onClick={() => functionHandler('bad')}>
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.func.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
