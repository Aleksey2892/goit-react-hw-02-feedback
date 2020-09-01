import React from 'react';
import MoreStatistics from './MoreStatistics';

import s from './styles.module.scss';

const Statistics = ({ state }) => {
  const { good, neutral, bad, total } = state;

  return (
    <div className={s.statisticsBox}>
      <p className={s.titleFeedback}>Statistics</p>

      <ul className={s.statList}>
        <li className={s.statItem}>Good: {good}</li>
        <li className={s.statItem}>Neutral: {neutral}</li>
        <li className={s.statItem}>Bad: {bad}</li>
        {total > 0 && <MoreStatistics moreState={state} />}
      </ul>
    </div>
  );
};

export default Statistics;
