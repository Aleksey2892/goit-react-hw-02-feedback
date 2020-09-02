import React from 'react';
import PropTypes from 'prop-types';

import s from '../styles.module.scss';

const Statistics = ({ ...props }) => {
  const { good, neutral, bad, total, positivePercentage } = props;

  return (
    <div className={s.statisticsBox}>
      <ul className={s.statList}>
        <li className={s.statItem}>Good: {good}</li>
        <li className={s.statItem}>Neutral: {neutral}</li>
        <li className={s.statItem}>Bad: {bad}</li>
        <li className={s.statItem}>Total: {total}</li>
        <li className={s.statItem}>Positive feedback: {positivePercentage}%</li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
